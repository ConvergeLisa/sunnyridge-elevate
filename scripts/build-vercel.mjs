#!/usr/bin/env node
/**
 * Vercel build entrypoint.
 *
 * The project is authored as a TanStack Start app whose default Vite build
 * targets Cloudflare Workers. Vercel cannot run that worker output, so this
 * script produces a plain static SPA from the same codebase:
 *
 *   1. Run `vite build` (emits client assets to dist/client and a worker to dist/).
 *   2. Copy dist/client/* into vercel-dist/.
 *   3. Synthesize vercel-dist/index.html that boots the SPA on the client.
 *
 * The SPA hydrates TanStack Router on the client; per-route metadata updates
 * after hydration. There are no server functions in use, so all routes work.
 */
import { execSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { existsSync } from "node:fs";

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const outDir = path.join(root, "vercel-dist");

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", env: process.env });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

async function findClientEntry() {
  // Prefer Vite's manifest if present.
  const manifestCandidates = [
    path.join(clientDir, ".vite", "manifest.json"),
    path.join(clientDir, "manifest.json"),
  ];
  for (const m of manifestCandidates) {
    if (existsSync(m)) {
      const manifest = JSON.parse(await fs.readFile(m, "utf8"));
      const entry = Object.values(manifest).find((v) => v && v.isEntry);
      if (entry) {
        return {
          js: "/" + entry.file,
          css: (entry.css || []).map((c) => "/" + c),
        };
      }
    }
  }
  // Fallback: scan assets dir for the first JS file matching an entry pattern.
  const assetsDir = path.join(clientDir, "assets");
  if (existsSync(assetsDir)) {
    const files = await fs.readdir(assetsDir);
    const js = files.find(
      (f) => /\.js$/.test(f) && /(client|entry|main|index)/i.test(f),
    );
    const css = files.filter((f) => f.endsWith(".css"));
    if (js) {
      return {
        js: "/assets/" + js,
        css: css.map((c) => "/assets/" + c),
      };
    }
  }
  throw new Error(
    "Could not locate client entry in dist/client. Build output layout changed?",
  );
}

function buildHtml({ js, css }) {
  const cssTags = css
    .map((href) => `    <link rel="stylesheet" crossorigin href="${href}">`)
    .join("\n");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Sunnyridge Dental</title>
    <meta name="description" content="Sunnyridge Dental — a warm, welcoming family dental practice in Germiston." />
    <meta property="og:title" content="Sunnyridge Dental" />
    <meta property="og:description" content="A warm, welcoming family dental practice in Germiston." />
    <meta property="og:type" content="website" />
${cssTags}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="${js}"></script>
  </body>
</html>
`;
}

async function main() {
  // 1. Build with the existing config.
  run("npm run build");

  if (!existsSync(clientDir)) {
    throw new Error(
      `Expected client output at ${clientDir} after build, but it does not exist.`,
    );
  }

  // 2. Reset outDir and copy client assets.
  await fs.rm(outDir, { recursive: true, force: true });
  await copyDir(clientDir, outDir);

  // 3. Ensure favicon is at /favicon.svg (it should already be, copied from public/).
  // 4. Create / overwrite index.html for the SPA shell.
  const entry = await findClientEntry();
  const html = buildHtml(entry);
  await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");

  console.log(`\n✓ Vercel build ready at ${outDir}`);
  console.log(`  entry js: ${entry.js}`);
  console.log(`  entry css: ${entry.css.join(", ") || "(none)"}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

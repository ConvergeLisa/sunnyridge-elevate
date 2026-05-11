#!/usr/bin/env node
/**
 * Vercel build entrypoint.
 *
 * Builds a standalone Vite + React SPA from `vercel/index.html` →
 * `src/main.vercel.tsx`, completely bypassing TanStack Start / Router /
 * Cloudflare Workers. The Lovable preview & publish flow is untouched
 * because it never invokes this script.
 */
import { build } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { promises as fs } from "node:fs";
import { existsSync } from "node:fs";

const root = process.cwd();
const vercelRoot = path.join(root, "vercel");
const outDir = path.join(root, "vercel-dist");
const publicDir = path.join(root, "public");

async function copyDir(src, dest) {
  if (!existsSync(src)) return;
  await fs.mkdir(dest, { recursive: true });
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

await fs.rm(outDir, { recursive: true, force: true });

await build({
  root: vercelRoot,
  publicDir,
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: false,
  },
});

console.log(`\n✓ Vercel SPA build ready at ${outDir}`);

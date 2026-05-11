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
const outDir = path.join(root, "vercel-dist");
const publicDir = path.join(root, "public");

await fs.rm(outDir, { recursive: true, force: true });

await build({
  root,
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
    rollupOptions: {
      input: path.join(root, "vercel", "index.html"),
    },
  },
});

// Move vercel/index.html → root index.html in output (Vite preserves the input's relative path).
const nestedHtml = path.join(outDir, "vercel", "index.html");
if (existsSync(nestedHtml)) {
  await fs.rename(nestedHtml, path.join(outDir, "index.html"));
  await fs.rm(path.join(outDir, "vercel"), { recursive: true, force: true });
}

console.log(`\n✓ Vercel SPA build ready at ${outDir}`);

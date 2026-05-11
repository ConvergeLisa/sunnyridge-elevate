# Fix Vercel 404 deployment

## What's happening

The project is built on **TanStack Start** with the **Cloudflare Workers** preset (configured by Lovable's `@lovable.dev/vite-tanstack-config`). The build emits a Worker bundle into `dist/` plus client assets in `dist/client/`. Vercel doesn't run Cloudflare Workers, so when it tries to serve the build, there is no static `index.html` at the root → 404.

Lovable's preview and the published `.lovable.app` URL rely on this Cloudflare setup. We must NOT remove it (it would break the Lovable editor preview and the existing publish flow).

## Approach

Add a Vercel-only build path that produces a static SPA from the same codebase, alongside the existing Cloudflare build. Vercel reads `vercel.json` exclusively — Lovable's preview/publish ignores it — so this is non-destructive.

Steps:

1. **Add `vercel.json`** at the project root with:
   - `buildCommand`: a custom command that runs the normal Vite build, then post-processes the output into a static SPA
   - `outputDirectory`: `vercel-dist`
   - `rewrites`: all routes → `/index.html` (so refresh on `/services`, etc. works)
   - `framework: null` (disable Vercel's auto-detection that picks the wrong preset)

2. **Add `scripts/build-vercel.mjs`** — a small post-build script that:
   - Runs `vite build` (the existing Cloudflare-preset build)
   - Copies `dist/client/*` → `vercel-dist/`
   - Generates a minimal `vercel-dist/index.html` that boots the SPA: includes the built JS/CSS entry tags discovered from `dist/client/.vite/manifest.json`, plus the favicon link and base meta tags from `__root.tsx`
   - Since the site is fully client-renderable (no server functions are in use), the SPA hydrates and renders the homepage and all routes correctly

3. **No changes to**:
   - `vite.config.ts`, `wrangler.jsonc`, `src/server.ts`, `src/router.tsx`, any route files, components, styles, or assets
   - The Lovable preview, the existing `.lovable.app` publish target, and the Cloudflare Worker output remain fully intact

## Result

- Vercel: `bun install && node scripts/build-vercel.mjs` → static `vercel-dist/` with SPA fallback → homepage loads at `/`, deep links work on refresh
- Lovable preview & publish: unchanged (still uses Cloudflare via `vite build`)
- Design and content: untouched

## Caveats to flag

- SSR/SEO meta from TanStack Router's `head()` won't be pre-rendered on Vercel (it's a pure SPA there). The `<title>` and meta tags from `__root.tsx` will be in the static `index.html`; per-route head tags update on the client after hydration.
- If you later add server functions or API routes, they will work on the Lovable/Cloudflare deployment but **not** on the Vercel deployment (Vercel will be static-only). At that point we'd need to switch Vercel to a different setup.

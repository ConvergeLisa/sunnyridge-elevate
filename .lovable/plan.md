## Goal
Make the Sunnyridge Dental logo blend cleanly into the navigation bar by removing its cream background, so it sits seamlessly on both the transparent (top of page) and glassmorphism (scrolled) nav states.

## Approach
The current `src/assets/logo.png` is a flat mockup with a baked-in cream rectangle background. That solid block looks like a sticker on the nav. We'll generate a transparent PNG version of the same logo (tooth mark + family icon + "Sunnyridge Dental / Dr S Lutchman & Associates / Caring for Germiston smiles since 2003" wordmark) and swap it into the header.

## Steps
1. Generate `src/assets/logo-transparent.png` using the image tool with `transparent_background: true`, matching the existing logo's composition and the project's deep-teal + warm-gold palette.
2. Update `src/components/site/Nav.tsx` to import and render `logo-transparent.png` instead of `logo.png`.
3. Slightly increase the rendered height (e.g. `h-11` → `h-12`) since the transparent version no longer has internal padding, so it can breathe more.
4. Leave the footer using the original `logo.png` (it sits on a cream footer panel, so the baked background is fine there) — unless you'd prefer the transparent one there too.

## Out of scope
- No layout, color, or copy changes.
- No changes to the footer (unless requested).
- No changes to the favicon or social share images.

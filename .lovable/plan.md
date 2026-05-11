## Goals
1. Fix broken logo on mobile and switch to the new SVG icon.
2. Show logo + "Sunnyridge Dental / Dr S Lutchman & Associates" text on mobile too (same as desktop).
3. Add a working mobile menu (hamburger) so nav links are reachable on small screens.
4. Use the same icon as the site favicon.

## Changes

**Assets**
- Copy `user-uploads://Untitled_design.svg` → `src/assets/logo-icon.svg` (used in Nav + footer).
- Copy same file → `public/favicon.svg` for the browser tab icon.

**`src/routes/__root.tsx`**
- Add `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` in the head meta/links so the favicon updates.

**`src/components/site/Nav.tsx`**
- Replace `logo.png` import with the new `logo-icon.svg`.
- Remove `hidden sm:flex` from the brand text block so the "Sunnyridge Dental / DR S LUTCHMAN & ASSOCIATES" lockup shows on mobile too (slightly smaller on xs).
- Tighten logo size on mobile (e.g. `h-9 sm:h-10`) so the lockup fits at 360–400px widths.
- Add a mobile menu:
  - Hamburger button visible `md:hidden` on the right (replaces/sits next to the Book CTA — Book CTA stays hidden on xs since the sticky bottom bar already provides Call/WhatsApp/Book).
  - Clicking toggles an animated dropdown panel under the pill (glass + shadow) listing: Services, About, Smiles, Reviews, Contact, plus a full-width "Book Appointment" button.
  - Closes on link click and on `Esc`.
  - Uses lucide `Menu` / `X` icons; no new dependencies.
- Keep existing scrolled-state styling.

**`src/routes/index.tsx` (footer only)**
- Swap footer logo import to the new SVG so header + footer match.

## Out of scope
No layout, color, copy, or section changes elsewhere. Sticky mobile CTA bar stays as-is.

## Palette refinement — warmer, more human

Scope: tokens in `src/styles.css` only. No layout, no component, no copy changes. All semantic tokens stay the same names, so every existing `bg-primary`, `text-gold`, `bg-cream`, etc. picks up the new tones automatically.

### New palette direction

| Token | Now (cool) | New (warm) | Used for |
|---|---|---|---|
| `--primary` | muted deep blue | warm charcoal with a faint teal lean | Nav buttons, headlines accent, testimonial section bg |
| `--foreground` | cool near-black | warm off-black (slight brown undertone) | Body text |
| `--background` | very pale cream | slightly deeper warm off-white | Page background |
| `--cream` | light cream | soft sand / oat | Section backgrounds (about, trust strip, footer) |
| `--accent` | cool pale blue | warm taupe / soft clay | Service icon chips, contact cards |
| `--gold` | warm gold | slightly more muted, honeyed gold | Stars, hairline accents, eyebrow labels |
| `--muted-foreground` | cool grey | warm stone grey | Secondary text |
| `--border` | cool light | warm sand border | Cards, dividers |

### Atmosphere goals
- Backgrounds read as "morning light on warm plaster," not "white paper."
- Dark sections (testimonials) feel like warm clay/charcoal — inviting, not corporate.
- Gold becomes a quiet honey tone rather than a bright metallic — used as a whisper, not a shout.
- Every neutral pulled toward the warm side of the oklch hue wheel (hue ~60–80 for neutrals, ~180–200 for the deep tone instead of 235).

### Implementation
1. Update `:root` token values in `src/styles.css` (oklch only).
2. Lightly retune the hero radial-gradient backdrop in `src/routes/index.tsx` so the warm/cool blobs become two warm tones (sand + soft clay) — single inline style, no structural change.
3. Visually QA at the current viewport (948px) and on mobile to confirm contrast on:
   - Primary buttons
   - Dark testimonial section
   - Glass nav over cream background
   - Footer + trust strip on the new sand background

### Out of scope
- No layout, spacing, typography, copy, image, or component changes.
- No new sections or tokens beyond what's listed.
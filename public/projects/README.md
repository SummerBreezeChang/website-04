# Project images

Each case study has its own folder (slug matches the URL: `/projects/<slug>`).

## Required first export: `thumb.jpg`

Put a **cover thumbnail** here as **`thumb.jpg`** (JPEG or WebP if you rename in code — default is `.jpg`).

- **Aspect ratio:** ~**4:3** matches the “More projects” grid and nav previews.
- **Pixel size:** **1200×900** is plenty for retina cards; **1600×1200** if you want headroom. Larger than ~2500px wide is usually unnecessary for the web.
- **File size:** Aim under **~300KB** per thumb if you can (compress in Figma / ImageOptim / Squoosh) so the site stays fast.

## Extra assets (later)

Add more files in the same folder (e.g. `hero.jpg`, `screen-01.png`) when we wire real imagery into case study sections. Those names are not used by the app until we point the page at them.

## Home Bento naming (active)

Section 2 (home bento grid) now reads these files:

- Default cards (Bookee, Client Intake Agent, MINA, TCA): `bento.jpg`
- Wide card (Playdates): `bento-wide.jpg`
- Tall card (PetCard): `bento-tall.jpg`

All files live in each project folder, e.g.:

- `/projects/bookee/bento.jpg`
- `/projects/playdates/bento-wide.jpg`
- `/projects/petcard/bento-tall.jpg`

Recommended export sizes:

- `bento.jpg`: ~`1200x1120` (near square / slight wide)
- `bento-wide.jpg`: `2200x1000`
- `bento-tall.jpg`: `1080x2040`

Fallback behavior:

- If a bento file is missing, home bento falls back to `thumb.jpg`.

## Squarespace

You do **not** need Squarespace live to move forward. Export images from your files / Figma / old backups and drop them into these folders locally, then run `npm run dev` to preview.

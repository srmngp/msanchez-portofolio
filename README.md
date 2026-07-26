This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## TO DO

- [x] optimize images (converted referenced raster assets to WebP, ~199MB → ~33MB)
- [x] remove dates from home
- [x] update home layout according to figma
- [x] review copywriting (fixed "Desing"→"Design", "Comercial"→"Commercial", "hand to hand"→"hand in hand")
- [x] accessibility review (removed nested `<main>` landmarks, added page `<h1>`s, footer mobile layout)
- [x] add CV to download

### Pending / follow-ups
- Cosmopolis project copy is in Spanish while the rest of the site is in English — decide language and translate

### Notes
- Art Production (`app/(darkLayout)`) is forced dark regardless of the OS `prefers-color-scheme`: `--color-dark` is defined in `globals.css` so `bg-dark` is a real utility, and the layout wrapper uses `min-h-screen bg-dark text-white` with `color-scheme: dark`.

### Image assets — WebP conversion (always use this process)

Source images (the raw exports in the `2026-07_Images_Portfolio` folders) must never be committed as-is. Convert every image to WebP with the **same** settings so the whole site stays consistent.

**Where files go / naming** (`public/design-projects/<project>/`):

- `portada_<project>.webp` — project header (shown large at the top of the project page)
- `cover_<project>.webp` — card image in the home grid (`showcase.js`)
- `imagen1_<project>.webp` … `imagenN_<project>.webp` — gallery images (order matters)

**Standard conversion** (ImageMagick — the only tool installed; no `cwebp`/`vips`):

```bash
convert "SOURCE.png" -resize '2560x>' -quality 80 -strip \
  "public/design-projects/<project>/<name>.webp"
```

- `2560x>` = downscale to 2560px wide max (retina-sharp even for the large header), keep aspect ratio, never upscale.
- `-quality 80` and `-strip` (drops metadata) — matches all existing assets (~15–350 KB each).
- The aspect ratios in each project's `page.js` (`aspectRatio` / `mobileAspectRatio`) crop via CSS `object-cover`; set them to match the Figma frame, not the raw file.

**Huge source PNGs (≈12000+ px, tens of MB) — do NOT crash the machine:**

Decoding these in ImageMagick is heavy and a naive run (especially with a large `-limit map`, which memory-maps to disk and thrashes) has frozen the dev machine. Convert them **one at a time**, RAM-bound and low-priority:

```bash
nice -n 19 ionice -c 3 convert -limit memory 2GiB -limit map 256MiB -limit thread 1 \
  "SOURCE.png" -resize '2560x>' -quality 80 -strip "OUT.webp.tmp" && mv "OUT.webp.tmp" "OUT.webp"
```

Never batch several giant conversions in parallel, and don't leave a headless browser open while converting.

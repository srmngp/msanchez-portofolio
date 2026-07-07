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

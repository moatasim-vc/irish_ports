# Irish Ports website

Public website for the Irish Ports Organisation. It uses the same stack as the UK Ports site: Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deploying

The site deploys to Vercel with the default Next.js settings (no `vercel.json` needed). Every page is prerendered as static HTML.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Once the real domain is live | Absolute base for Open Graph and canonical URLs, e.g. `https://www.example.ie`. Without it, the Vercel production URL is used. |

## Design

The site follows the **Harbour** theme (navy, teal and gold, Inter font).

- `design/harbour-reference.html` is the approved homepage mockup. Open it in a browser to see it.
- `design/harbour-reference.template.html` has the same markup without the embedded images, which makes it easier to read.
- Theme tokens (colours, radii, shadows) and the shared classes (`.wrap`, `.section`, `.kicker`, `.btn`, `.card`, `.hero-bg`) are in `src/app/globals.css`. Use Tailwind utilities with the theme colours, for example `bg-navy`, `text-gold` and `border-line`.
- Section headings with the gold rule use `src/components/SectionTitle.tsx`.
- `src/components/Logo.tsx` is the Irish Ports badge.
- Page text lives in `src/content/` (`site.ts` for menus and contact details, `home.ts` for the home page). Nav links point at `#` until a page is built; set `ready: true` on its `NavItem` when it is.
- Photos used in the mockup are in `public/images/`.

## Structure

```
src/
  app/          routes (App Router)
  components/   shared UI
public/images/  site photos
design/         approved mockup for reference
```

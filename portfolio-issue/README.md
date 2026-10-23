# Issue 01: Mudasiru Abdullah's portfolio

A six-page portfolio laid out like a magazine. Next.js (App Router) and TypeScript.
The look comes from one hand-written stylesheet (`src/app/globals.css`), so every animation is plain CSS.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before you deploy (edit `src/config.ts`)
- `url`: your final address, e.g. `https://yourname.is-a.dev` (used for link previews).
- `x`: your X handle without the @. Leave it empty to hide the link.
- `formEndpoint`: already set to the new Formspree form. In Formspree, check which email receives it and restrict it to your new domain.
- Email and WhatsApp links live in `src/components/pages/BackCover.tsx`.
- Add `public/favicon.ico` (or `src/app/icon.png`). The link-preview card is `public/og.png`; replace it with a real screenshot of the cover if you like (1200 x 630).

## Where things are
- `src/components/pages/`: one component per page (Cover, Profile, NoteForge, Krazzy, OtherWork, BackCover).
- `src/components/Stage.tsx`: the page controls. `src/lib/initStage.ts`: transitions, swipe, keyboard, URL hash, stickers.
- `public/img/`: screenshots. `public/*.pdf`: resume and CV download files.
- `src/components/EditorSlip.tsx`: the "Write to the editor" form (Formspree).

## Notes
- Each page has its own entrance: torn paper, scanner sweep, split, marker, stamp.
- Swipes starting at the very screen edge are ignored so Android's back gesture works. Arrow keys also turn pages.
- Without JavaScript the pages stack vertically. Reduced-motion settings are respected.
- The stage logic is imperative DOM code on purpose: it drives CSS-class transitions between server-rendered pages.
- Orad's images are placeholders (stock and AI); the page says so. Replace them if the client supplies real artwork.
- is-a.dev: write the pull request yourself (they reject AI-written requests) and keep the site a portfolio, not a shop.

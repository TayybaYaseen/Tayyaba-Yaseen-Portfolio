# Tayyaba Yaseen — Portfolio (Next.js)

This is the Next.js (App Router) conversion of the single-file portfolio site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` — App Router entry: `layout.js` (fonts, theme-flash script, metadata) and `page.js` (assembles all sections).
- `components/` — one component per section (`Navbar`, `Hero`, `About`, `Expertise` — the 3D skills carousel, `Education`, `Feedback` — testimonials + lightbox, `CTA`, `Contact`, `Footer`, `WhatsAppFloat`), plus a shared `Reveal.js` scroll-animation wrapper.
- `lib/` — editable content, kept separate from markup:
  - `skills.js` — the 6 expertise cards.
  - `clients.js` — the 6 client testimonials + project images.
  - `education.js` — the education/learning timeline.
  - `config.js` — **Facebook/Instagram/WhatsApp URLs and email — edit these here.**
  - `icons.js` — shared inline SVG icons.
- `public/images/` — all logos and project photos, served as static files (no more base64 embedding).
- `app/globals.css` — all site styling (theme tokens, glassmorphism, animations) — unchanged from the HTML version.

## Editing content

- **Skills / carousel cards** → `lib/skills.js`
- **Client testimonials / project photos** → `lib/clients.js`
- **Education timeline** → `lib/education.js`
- **Social links, WhatsApp number, email** → `lib/config.js`
- **Images** → replace files in `public/images/` (keep the same filenames, or update the paths in `lib/skills.js` / `lib/clients.js`)

## Notes

- Dark/light mode is stored in `localStorage` under the key `ty-theme`, with a small inline script in `app/layout.js` that applies it before first paint to avoid a flash of the wrong theme.
- The 3D carousel, lightbox, mobile nav, scroll-reveal animations, and contact form behavior are re-implemented with React state/hooks — same behavior as the original static site.

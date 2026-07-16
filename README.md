# SOWTHAS Fashion Academy — Website (v2, multipage)

Multipage React + Vite + React Router website for SOWTHAS Fashion Academy,
Teynampet, Chennai. Royal blue + gold theme with a two-tier navbar
(announcement strip, logo block, dropdown menus, pill CTA buttons).

## Quick start

```bash
npm install
npm run dev        # local dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Enquiry popup

An "Enquire Now" popup (name, email, mobile, enquire-for, heard-from) opens
automatically ~1.6s after the first page load (once per browser session) and
from the navbar **Enroll now** button. Submitting opens WhatsApp with the
details prefilled to the academy number — no backend needed. To store leads
in a sheet instead, connect a free service like Formspree or Google Forms in
`src/components/EnquiryModal.jsx` (`onSubmit`).

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, offerings tabs, trending courses, testimonials |
| `/about` | About — story, mentor (founder photo), journey timeline |
| `/courses` | Courses — detailed alternating sections, `#anchors` per course |
| `/gallery` | Gallery — photo grid with lightbox (keyboard: ← → Esc) |
| `/contact` | Contact — cards for address, phone/WhatsApp, email, Instagram |

## Where to edit content

Almost everything lives in **`src/data.js`**:

| What | Where |
|---|---|
| Phone, WhatsApp, email, address, Instagram | `CONTACT` |
| Top announcement strip text | `ANNOUNCEMENTS` |
| Navbar links & dropdown items | `NAV` |
| Hero stats | `STATS` |
| Offerings tabs / course cards / testimonials / journey | respective arrays |
| Gallery images & captions | `GALLERY` |

Images live in `public/images/` — replace any file keeping the same name,
or add new ones and reference them in `data.js`.

## ⚠️ Before you launch — replace placeholders

1. **Stats** ("500+ students", "4.9★") are placeholders — put real numbers.
2. **Testimonials** are sample copy showing the layout — replace with real
   student reviews (with permission).
3. **Instagram**: paste your real profile URL into `CONTACT.instagram` and
   update the handle text in `src/pages/Contact.jsx`.
4. **Announcements**: update `ANNOUNCEMENTS` with your actual current batches.
5. Consider a branded email (e.g. sowthasfashionacademy@gmail.com).

## Deploying (free options)

- **Netlify / Vercel**: build command `npm run build`, output directory `dist`.
- Because this uses BrowserRouter, add an SPA redirect so deep links work:
  - Netlify: create `public/_redirects` containing `/* /index.html 200`
  - Vercel: it handles SPA fallback automatically for Vite projects.

## Design system

- Palette: royal navy `#1C2A7A`, button blue `#2C3CAE`, zari gold `#D4A537`,
  light blue-white `#F6F8FD` — modelled on the reference navbar.
- Type: Fraunces (display) + Karla (body), from Google Fonts.
- Signature: tailor's **stitch** (dashed lines) on dividers, frames, buttons,
  and the timeline spine — kept from v1, recolored.
- Two-tier navbar: scrolling announcement bar (pauses on hover), logo block
  with Tamil line + tagline, hover/tap dropdowns, Contact & Enroll pill buttons.
- Fully responsive (1080/980/860/540 px breakpoints), keyboard-focus visible,
  lightbox keyboard navigation, respects `prefers-reduced-motion`.

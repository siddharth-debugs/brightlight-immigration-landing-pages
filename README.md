# Brightlight Spousal Sponsorship — Landing Page

Ads-ready landing page for **Brightlight Immigration**'s spousal PR
service. Optimized for paid traffic conversion: scarcity messaging,
multi-step qualifying inquiry form, real client video testimonials,
and a founder-led trust section.

**Live site:** https://siddharth-debugs.github.io/brightlight-spousal-pr/

## Stack

- Vite 8 + React 19
- Tailwind CSS 3 (custom navy + gold palette pulled from
  brightlightimmigration.ca)
- Framer Motion (animations, modal transitions)
- Lucide React (icons)
- DM Serif Display + DM Sans (Google Fonts)

## Sections

1. **Hero** — headline, slot counter card, primary CTA
2. **Trust strip** — 13 years, 1,000+ families, 98% approval, EN/PA/HI
3. **Why Brightlight** — 3 short benefit cards
4. **Founder feature** — Loveneet Paneswar (RCIC R522969) with
   pull-quote, bio, LinkedIn link
5. **Urgency block** — 8 slots/week scarcity with live countdown
6. **Testimonials** — 5 written Google reviews + 6 YouTube Short
   client video reels in a phone-style lightbox
7. **Final CTA** — closing call-to-action panel
8. **Footer strip**

Plus: multi-step inquiry modal, exit-intent popup, social-proof
booking toasts, sticky mobile CTA.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build to dist/
```

## Deploy

`main` auto-deploys to GitHub Pages via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). The
workflow injects `BASE=/brightlight-spousal-pr/` at build time so
Vite emits the correct asset paths.

## Customizing

- Brand assets, contact details, founder bio, reviews, and video
  reel IDs live in [src/data.js](src/data.js).
- Form submission in [src/components/InquiryModal.jsx](src/components/InquiryModal.jsx)
  currently sets `submitted = true` — wire it to your CRM/webhook.
- Drop a Meta Pixel or Google Ads conversion event inside the
  `Success` step of the inquiry modal once the lead pipeline is hooked up.

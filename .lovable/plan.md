# Modern Healthcare Clinic Website

A 5-page, story-driven clinic site with Framer-template aesthetics: glassmorphic floating nav, sky-blue brand system, motion everywhere, rich imagery and video.

## Design system

- **Colors**: Primary sky-500/600; backgrounds white + slate-50; text slate-800; sparing teal/coral accents for badges and dots only.
- **Typography**: Plus Jakarta Sans (headings + body), tight tracking on massive H1s, body line-height 1.7.
- **Surfaces**: 16–24px radii, soft diffuse shadows, subtle glass blur on floating elements.
- **Motion**: Framer Motion scroll-triggered fade + slide-up, route fade transitions, `whileHover scale 1.02` / `whileTap 0.98` on buttons & interactive cards, marquee for trust logos, hover image zoom on team cards.

## Global shell (persists across all pages)

- **Floating glassmorphic navbar** (sticky, top, rounded, backdrop-blur): logo, links to Home / About / Services / Blog / Contact, primary "Book Appointment" CTA.
- **Mobile**: hamburger → slide-out glassmorphic drawer.
- **Floating WhatsApp button** bottom-right on every page (links to `api.whatsapp.com/send?phone=...`).
- **Footer**: 4-col grid — brand blurb, sitemap, address + hours, newsletter signup.

## Pages

### 1. Home (`/`)
1. **Hero** — split layout. Left: massive H1 "Modern Care, Reimagined for You", subheadline, primary "Book Consultation" + outline "Watch Our Story". Right: rounded card with looping muted HTML5 doctor/patient video + floating "Verified Professionals" badge.
2. **Trust marquee** — infinite-scroll partner/insurance logos.
3. **Why Us** — 3-column feature cards (Zero Wait Times, Expert Specialists, Modern Tech) with custom Lucide icons that scale on hover.
4. **Services highlight** — alternating image/text rows for Dentistry, Optometry, etc., each with "Learn More".
5. **Testimonials** — horizontal scroll carousel with photo, 5-star rating, quote.
6. **Final CTA** — bold sky-blue section + embedded Calendly widget.

### 2. About (`/about`)
1. Cinematic full-width clinic interior hero with centered headline.
2. Two-column "Our Story" with line-by-line reveal animation.
3. Team grid — portrait cards, hover zoom inside `overflow-hidden`, reveals specialty + credential link.
4. Values — masonry of soft sky-tinted cards (Empathy, Innovation, Transparency, etc.).

### 3. Services (`/services`)
1. Large-typography page header.
2. Vertical tabbed interface — left rail of services, right pane crossfades to detail (description, image, recovery time, "Book this Service" CTA).
3. FAQ accordion — first visit, insurance, cancellations.

### 4. Blog (`/blog`)
1. Editorial header.
2. Featured post card (large image, category, title, excerpt).
3. Responsive grid of post cards with hover lift; category filter chips.
4. Newsletter strip.
   *(Posts will be static seed content; clicking a card opens a generated detail route `/blog/$slug`.)*

### 5. Contact (`/contact`)
1. Split layout. Left: stylized phone/email/address with custom icons + embedded Google Map (rounded). Right: embedded Calendly widget.
2. Below: oversized WhatsApp action card linking to `api.whatsapp.com`.

## Assets

- Generate hero, clinic interior, doctor portraits, service photos, blog covers as AI images saved into `src/assets/`.
- Source one royalty-free looping doctor/patient clip for the hero video (placed in `public/videos/`).
- Custom inline SVG / Lucide icon set tuned for healthcare (stethoscope, tooth, eye, heart-pulse, etc.).

## Technical notes

- TanStack Start file routes: `index.tsx`, `about.tsx`, `services.tsx`, `blog.tsx`, `blog.$slug.tsx`, `contact.tsx`. Each with own `head()` meta (title, description, og).
- Add `framer-motion`. Plus Jakarta Sans via Google Fonts in `__root.tsx` head.
- Shared `<SiteLayout>` (Navbar + WhatsApp FAB + Footer) wrapping each route's content; route fade via `AnimatePresence` keyed on pathname.
- Calendly via official embed script (loaded once); Google Map via iframe embed.
- Tailwind v4 theme tokens extended in `src/styles.css` for brand sky scale + accent teal/coral.
- All buttons/cards use a shared `MotionButton` / `MotionCard` with hover/tap scale.

## Out of scope (ask if needed)

- Real clinic name, phone, address, Calendly URL, WhatsApp number — placeholders used; easy to swap later.
- Real CMS for blog (static seed posts only).

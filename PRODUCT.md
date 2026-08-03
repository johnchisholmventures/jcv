# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: conference organizers, universities, business associations, policy organizations, and entrepreneurship programs evaluating whether to invite John Chisholm to speak.

Secondary: readers and viewers of his talks and writing; entrepreneurship educators interested in *Unleash Your Inner Company*; people researching his career and ventures.

## Product Purpose

Public website for John Chisholm as an experienced technology entrepreneur, author, and international speaker. Its job is to establish personal authority and convert qualified organizers into speaking invitations.

Primary conversion: **Invite John to Speak** (routes to a contact / speaking-inquiry page).

Secondary conversion: **Watch Selected Talks**.

Success: a first-time visitor concludes that John is an experienced, thoughtful, credible speaker whose ideas are grounded in a lifetime of building companies—and takes a clear next step to invite him or watch a talk.

## Positioning

John Chisholm is the public-facing brand: founder who sold technology companies, periodic investor/adviser, author of *Unleash Your Inner Company*, and decades-long speaker on entrepreneurship, innovation, regulation, technology, education, and personal development.

This is **not** the website of an active venture capital fund, investment adviser, or incubator. John Chisholm Ventures may appear as a quiet organizational/legal parent identity (footer), never as the dominant homepage brand. Investment history is evidence of experience, not a current capital-raising or pitch-submission offer.

## Operating Context

- Stack: Next.js 15 App Router, React 18, TinaCMS 3, Tailwind CSS 4, content in GitHub markdown under `content/`.
- Editors: non-technical client (John) edits posts and page content via `/admin` (TinaCloud); developers maintain design and schema.
- Live domain historically associated with John Chisholm Ventures; redesign reframes public identity toward John as speaker/author.
- Supporting routes already exist: posts, mission, team, investments, educators, book (`/uyic`), PDF short links (`/cv`, etc.).

## Capabilities and Constraints

- Homepage redesign + global chrome (nav/footer) in this pass; other routes inherit chrome and tokens but are not fully rewritten.
- “Invite John to Speak” → placeholder **contact / speaking inquiry page** (no live form backend required for v1).
- Testimonials: **placeholders only** until verified organizer quotes exist; do not invent praise. If none become available, prefer past engagements over generic praise.
- Do not invent audience figures, exits/returns, valuations, awards, or institutional endorsements from mere speaking/service affiliations.
- Do not invite founders to submit pitch decks or describe active outside-capital management.
- Do not lead the homepage with an archive of old articles.
- Do not use “JCV” as the primary homepage identity.
- Prefer verifiable numbers only (e.g., 40+ years career; two founded companies subsequently acquired).

## Brand Commitments

- Public name: **John Chisholm**. Supporting labels: Entrepreneur · Author · Speaker.
- Voice: experienced, intellectually serious, warm and approachable, independent-minded, credible without self-importance; optimistic about entrepreneurship and human potential. Not “visionary thought leader,” not corporate consulting agency copy, not trendy-startup hype.
- Respect age and longevity as advantages; do not reframe him as a young disruptive founder.
- Binding visual direction from approved redesign brief: warm editorial off-white ground, near-black text, restrained deep violet primary accent, sparingly used warm gold; serif display + clean sans interface; generous whitespace; speaker/portrait photography; premium author / ideas-publication / university lecture-series feel. Explicit anti-patterns: startup gradients, neon, glassmorphism, carousels, autoplay video, logo walls, institutional VC look, heavy purple image overlays.

## Evidence on Hand

- Team bio: `content/team/john-chisholm.md`
- Book: *Unleash Your Inner Company* — cover `public/uyic_cover.jpg`, route `/uyic`, educators page `/educators`
- Founded companies: Decisive Technology (now part of Google); CustomerSat (acquired; content notes ConfirmIt/FocusVision lineage)
- Selected ventures content: `content/investments/*` and logos under `public/assets/investments/`
- Talks with YouTube IDs: e.g. How to Regulate AI (`1fxw9nTecIs`, Northwood 2025), Don’t Make Law (`jojEjMW1LZM`), Cambridge Judge (`_RjZ7e1DbXo`)
- Photos: `public/assets/john-banner.jpg`, `public/assets/blog/authors/chisholm.jpg`
- CV PDF: `/cv` → `public/pdfs/chisholm_cv_november_2020.pdf`
- Social (existing site): LinkedIn, X/Twitter, Instagram links historically on site
- **Absent / must not fabricate:** verified testimonial quotations; formal institutional endorsements; active “portfolio” solicitation; speaker one-pager distinct from CV unless provided later

## Product Principles

1. **Speaking first.** Every major surface decision favors organizer confidence and invitation conversion over archive, fund, or brand-ego presentation.
2. **Experience over claim.** Show founded companies, real talks, and service history; never invent metrics, praise, or endorsements.
3. **Person over firm.** John Chisholm is the brand; Ventures stays quiet and legal.
4. **Editorial seriousness.** Warm, contemporary, and approachable without startup costume or VC institutional language.
5. **Honest placeholders.** Missing testimonials and contact backend ship clearly marked, never filled with fiction.

## Accessibility & Inclusion

Target WCAG AA contrast, visible keyboard focus, semantic navigation, meaningful alt text for photographs of John, labeled icon controls, respect for `prefers-reduced-motion`, body text ≥16px on mobile, tap targets ≥44px, no scroll-jacking, carousels, or autoplay media.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: universities, conference organizers, business associations, policy organizations, entrepreneurship programs, and readers evaluating whether John Chisholm’s experience is relevant to their audience or project.

Secondary: readers and viewers of his talks and writing; entrepreneurship educators interested in *Unleash Your Inner Company*; people researching his career and ventures.

## Product Purpose

Public website for John Chisholm as an experienced technology entrepreneur, author, and international speaker. Its job is to establish personal authority and make it easy for qualified visitors to start a thoughtful conversation.

Primary conversion: **Contact John** / **What can John do for you?** (routes to a contact page with relevant services).

Secondary conversion: **Watch Selected Talks**.

Success: a first-time visitor concludes that John is experienced, thoughtful, and credible; understands the kinds of topics and projects he engages with; and takes a clear next step to contact him or watch/read more.

## Positioning

John Chisholm is the public-facing brand: founder who sold technology companies, periodic investor/adviser, author of *Unleash Your Inner Company*, and decades-long speaker/writer on entrepreneurship, regulation, innovation, higher education, and economic growth.

This is **not** the website of an active venture capital fund, investment adviser, or incubator. John Chisholm Ventures may appear as a quiet organizational/legal parent identity (footer), never as the dominant homepage brand. Investment history is evidence of experience, not a current capital-raising or pitch-submission offer.

## Operating Context

- Stack: Next.js 15 App Router, React 18, TinaCMS 3, Tailwind CSS 4, content in GitHub markdown under `content/`.
- Editors: non-technical client (John) edits posts and page content via `/admin` (TinaCloud); developers maintain design and schema.
- Live domain historically associated with John Chisholm Ventures; redesign reframes public identity toward John as speaker/author.
- Supporting routes already exist: posts, mission, team, investments, educators, book (`/uyic`), PDF short links (`/cv`, etc.).

## Capabilities and Constraints

- Homepage redesign + global chrome (nav/footer) in this pass; other routes inherit chrome and tokens but are not fully rewritten.
- Contact page → placeholder contact/services page (no live form backend required for v1).
- People & Places photo grid is Tina-backed; use it for social proof and real engagements instead of unverified testimonials.
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
- *Unleash Your Inner Company* is available in English, Chinese, Spanish, Portuguese, and Polish.
- Recent board service includes the Foundation for Economic Education (FEE) in Atlanta and the Future of Free Speech at Vanderbilt University.
- Founded companies: Decisive Technology (now part of Google); CustomerSat (acquired; content notes ConfirmIt/FocusVision lineage)
- Selected ventures content: `content/investments/*` and logos under `public/assets/investments/`
- Talks with YouTube IDs: e.g. How to Regulate AI (`1fxw9nTecIs`, Northwood 2025), Don’t Make Law (`jojEjMW1LZM`), Cambridge Judge (`_RjZ7e1DbXo`)
- Photos: `public/assets/john/john-chisholm-current-portrait-preferred.jpg`, `public/assets/john/john-chisholm-speaking-podium.jpg`, `public/assets/john/uis-workshop-audience.jpg`
- CV PDF: `/cv` → `public/pdfs/chisholm_cv_november_2020.pdf`
- Social (existing site): LinkedIn, X/Twitter, Instagram links historically on site
- **Absent / must not fabricate:** verified testimonial quotations; formal institutional endorsements; active “portfolio” solicitation; speaker one-pager distinct from CV unless provided later

## Product Principles

1. **Contact without pressure.** Make it easy to reach John while keeping speaking, writing, workshops, and advisory conversations in a balanced hierarchy.
2. **Experience over claim.** Show founded companies, real talks, and service history; never invent metrics, praise, or endorsements.
3. **Person over firm.** John Chisholm is the brand; Ventures stays quiet and legal.
4. **Editorial seriousness.** Warm, contemporary, and approachable without startup costume or VC institutional language.
5. **Honest evidence.** Missing testimonials and contact backend stay clear; never fill gaps with fiction.

## Accessibility & Inclusion

Target WCAG AA contrast, visible keyboard focus, semantic navigation, meaningful alt text for photographs of John, labeled icon controls, respect for `prefers-reduced-motion`, body text ≥16px on mobile, tap targets ≥44px, no scroll-jacking, carousels, or autoplay media.

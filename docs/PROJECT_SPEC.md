# JCV modernization — project spec & handoff

**Purpose:** Restart context for agents/humans continuing this work.  
**Updated:** 2026-08-02  
**Branch:** `modernize-tinacms` (local commits exist; design redesign largely **uncommitted**; push when ready for Vercel preview)  
**Repo:** https://github.com/johnchisholmventures/jcv  
**Working directory:** `~/Documents/code/jcv`  
**Backup of prior attempt:** `~/Documents/code/jcv-old` (can delete after you’re confident)

---

## Goal

Modernize the John Chisholm Ventures marketing site so:

1. **John** (non-technical client) can create/edit posts, videos, and links via a web admin UI without emailing a developer.
2. Content stays **in GitHub** (markdown), edited through **TinaCMS** (free TinaCloud plan: 2 users).
3. Stack is current: **Next.js 15 App Router + Tina 3**, following the [official App Router guide](https://tina.io/docs/frameworks/next/app-router).
4. Public site is **speaker-first** (primary conversion: invite John to speak) while still presenting **John Chisholm Ventures** as the firm masthead/legal identity, with a real **Team** page.
5. Preview on a **branch/PR** before merging to `master` / production.

---

## Client & product context

| Item | Detail |
|------|--------|
| Client | John Chisholm — prefers not to touch Git/markdown by hand |
| Pain today | Emails docs → developer hand-edits `_posts` + frontmatter + assets + deploy |
| Domain / live site | Production still on **old** `master` until PR is merged |
| CMS choice | TinaCMS + GitHub; **TinaCloud Free** ($0, 2 users: you + John) |
| Publish model (planned) | John saves in `/admin` → commit to GitHub → Vercel rebuild |
| Product records | `PRODUCT.md` (truth), `DESIGN.md` + `.impeccable/design.json` (visual system) |

### Content types (posts)

| Format | Behavior |
|--------|----------|
| `article` | Body on-site at `/posts/[slug]` |
| `video` | YouTube embed via `youtubeId` |
| `external` | Card/link goes out via `externalUrl` (no local post page required) |

### Topics (controlled list)

`entrepreneurship`, `regulation`, `governance`, `economics`, `innovation`, `education`, `interview`, `ai`, `personal-development`

Also: `featured` + `featuredOrder`, `draft` (hidden when true).

---

## Status at a glance

| Area | Status |
|------|--------|
| Next 15 + Tina App Router plumbing | **Done** |
| Content migration to `content/` | **Done** |
| Local build / SSG routes | **Done** |
| Speaker-first redesign (homepage + templates) | **Done** (local; commit/push pending) |
| JCV logo masthead + Team (John + Dickey) | **Done** |
| Books hub (Unleash + Integral) | **Done** |
| Commit redesign to git + push branch | **TODO** |
| Vercel preview PR | **TODO** |
| TinaCloud + Vercel env | **TODO** |
| Client smoke-test + merge to `master` | **TODO** |
| Real contact form / email + verified testimonials | **TODO** (placeholders) |
| Rewrite older “we/firm” CMS body copy | **TODO** (optional / editorial) |

---

## What we did (completed)

### 1. Architecture rewrite (Tina + App Router)

- Abandoned in-place Next 12 / Pages Router “bolt Tina on” approach after it diverged from official docs.
- **Greenfield** Next 15 App Router app via `create-next-app`.
- Installed `tinacms` + `@tinacms/cli`; config and data fetching aligned with [Tina Next App Router docs](https://tina.io/docs/frameworks/next/app-router).
- React pinned to **18.3.1** (Tina admin peers; Next 15 supports it).
- Package manager: **pnpm** (Tina recommends it).
- Tailwind **v4** (`@import "tailwindcss"`, `@theme` in `app/globals.css`).

### 2. Content migration

- Old `_posts/` / `_pages/` → **`content/`**:
  - `content/posts/*.md` (~21 posts)
  - `content/team/*.md` (John Chisholm, Dickey Singh)
  - `content/pages/{mission,educators,investments}.md`
  - `content/investments/*.md`
- Frontmatter normalized: `format`, `topics`, `featured`, `featuredOrder`, `draft`, `externalUrl`, `youtubeId`, author object.
- Media under `public/assets/`, uploads → `public/uploads/`.
- Legacy PDF short URLs: `/cv`, `/regulation`, `/dei`, `/deipres`.

### 3. Data layer & scripts

```ts
import { client } from '@/tina/__generated__/client'
const { data } = await client.queries.postConnection({ last: 100 })
await client.queries.post({ relativePath: `${filename}.md` })
```

Rich text: `TinaMarkdown` via `components/TinaContent.tsx`.

| Script | Command | When |
|--------|---------|------|
| `pnpm dev` | `tinacms dev -c "next dev --turbopack"` | Local dev + GraphQL on `:4001` |
| `pnpm build` | `tinacms build && NODE_ENV=production next build` | Production **with** TinaCloud |
| `pnpm build:local` | `tinacms build --local --skip-cloud-checks -c "NODE_ENV=production next build"` | Local/CI without Cloud |
| `pnpm start` | `NODE_ENV=production next start` | Serve production build |

**Important:** Force `NODE_ENV=production` for `next build` when Tina CLI is in the path, or prerender errors appear.

### 4. Design overhaul (2026-08-02)

Speaker-first redesign from a detailed design brief + impeccable skill (`PRODUCT.md`, `DESIGN.md`).

**Visual system**

- Warm paper `#F6F3ED`, charcoal text, deep violet `#5835A5`, sparingly used gold `#B08A45`
- Source Serif 4 (display) + Source Sans 3 (UI/body)
- Shared: `PageShell`, `PageHeader`, `BackLink`, editorial markdown styles, topic chips, cards/buttons

**Chrome**

- Sticky header with **official JCV logo** (`/assets/jcv-logo.png`) — *John Chisholm Ventures / Entrepreneurs | Advisors | Investors*
- Nav: Speaking · About · **Team** · Talks & Writing · Ventures · Books · Invite CTA
- Footer: JCV logo, site links, **LinkedIn / X as icons**, legal line

**Homepage** (`components/home/*`)

Hero → recognition strip → speaking topics → featured talks (modal, no autoplay) → experience → ventures → **books (Unleash + Integral)** → testimonial **placeholders** → selected writing → invite band.

**Routes (current)**

| Route | Purpose |
|-------|---------|
| `/` | Speaker-first homepage |
| `/contact` | Speaking-inquiry placeholder (LinkedIn/X until form/email wired) |
| `/mission` | About / mission (Tina page) |
| `/team` | **Team** — roster cards + full bios for John & Dickey |
| `/talks` | Talks & writing archive + topic filters |
| `/investments` | Venture **history** framing (not pitch portal) |
| `/books` | Books hub: Unleash + Integral |
| `/uyic` | Unleash detail page |
| `/educators` | Educator program (static gallery, no carousel) |
| `/posts/[...]` | Editorial post template + `generateMetadata` + `useTina` |
| `/admin` | Tina admin SPA |

**Books**

- Unleash: on-site `/uyic` + educators; cover `public/uyic_cover.jpg`
- Integral: external [integralpoem.com](https://integralpoem.com/); cover `public/integral_cover.png`
- Structured data for both books in root layout

**Client-sensitive decisions already applied**

- JCV masthead restored (not personal-name-only wordmark)
- Team page restored in nav with Dickey visible
- Investments labeled as career/venture history, not “submit a pitch”
- Testimonials are marked placeholders only

### 5. Docs in tree

- `README.md` — short developer overview  
- `docs/EDITOR_GUIDE.md` — client-facing how to add a post  
- `docs/PROJECT_SPEC.md` — this handoff  
- `PRODUCT.md` / `DESIGN.md` — product + design system  
- `.env.example` — `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`

### 6. Verified locally

- Production-style build succeeds (28+ static routes including `/books`, `/contact`, `/talks`).
- `pnpm dev` serves site + Tina GraphQL; admin HTML at `public/admin/index.html`.

---

## What we have left to do

### A. Ship path (blocking production / client self-serve on a URL)

1. **Git**
   - Commit the redesign (large set of uncommitted files on `modernize-tinacms`).
   - `git push -u origin modernize-tinacms`.
2. **PR + Vercel preview**
   - Open PR into `master`.
   - Confirm Vercel project → `johnchisholmventures/jcv`.
   - Install: `pnpm install` · Build: `pnpm build` (or `pnpm install && pnpm build`).
   - Share preview URL with John for design/content review.
3. **TinaCloud Free** ([app.tina.io](https://app.tina.io))
   - Create project, connect this GitHub repo.
   - Vercel env: `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`.
   - Invite John as 2nd user; confirm `/admin` on preview/production.
4. **Smoke-test with John**
   - Draft post → save → commit + rebuild.
   - Article / video / external formats.
   - Topic filters on `/talks`; featured content behavior.
   - Team bios editable; investments cards editable.
5. **Merge to `master`** only after sign-off → production cutover.

### B. Content & conversion gaps (expected client feedback)

| Item | Notes |
|------|--------|
| **Contact / speaking inquiry** | `/contact` is a placeholder (LinkedIn/X). Wire real email or form when John provides it. |
| **Testimonials** | Placeholder quotes only. Replace with verified organizer quotes or swap section for past engagements. |
| **Speaker one-pager** | “Download speaker information” → `/cv` (old CV PDF). Replace if a current one-pager exists. |
| **Hero / experience photography** | `john-banner.jpg` is a networking room shot; better stage-speaking photo would strengthen hero. |
| **CMS body copy voice** | Templates are speaker-first; some Tina markdown (mission, investments) still uses older “we / firm / invest” language. Editorial rewrite optional. |
| **Dickey role line** | Team cards use short role labels; confirm preferred title with John. |
| **Integral / Unleash external URLs** | Confirmed Integral: `https://integralpoem.com/`. Unleash site link uses `https://unleashyourinnercompany.com`. |

### C. Nice-to-have / polish (not blocking)

- Extend `useTina` visual editing beyond post pages (mission/team/pages).
- Remove create-next-app leftover SVGs in `public/` (`next.svg`, etc.).
- Dead code cleanup: old `Hero.tsx`, `EducatorsSlideshow.tsx` (carousel replaced by `EducatorsGallery`).
- PDF “documents” collection in Tina (today short URLs are rewrites only).
- Dependabot / periodic Tina upgrades.
- Delete `~/Documents/code/jcv-old` when no longer needed.
- `npm audit` noise: mostly Tina transitive deps — do **not** `audit fix --force`.
- Homepage still uses some hard-coded section copy (topics, ventures blurbs); could move to Tina later.
- Optional: Instagram if still active (footer currently LinkedIn + X only).

### Explicitly out of scope (unless requested)

- Self-hosted Tina (using TinaCloud Free).
- Editorial Workflow / paid Tina tiers.
- Migrating off GitHub as CMS.
- Invented testimonials, audience numbers, or portfolio solicitation CTAs.

---

## Key files map

```
PRODUCT.md, DESIGN.md, .impeccable/   # product + design system
app/
  layout.tsx, page.tsx, globals.css
  contact|books|talks|mission|team|investments|educators|uyic/page.tsx
  posts/[...filename]/page.tsx + client-page.tsx
components/
  MainNav.tsx, Footer.tsx, SiteLayout.tsx
  PageShell.tsx, PageHeader.tsx, BackLink.tsx
  home/*                               # homepage sections
  MoreArticles.tsx, PostPreview.tsx, TinaContent.tsx
content/                               # CMS markdown (source of truth)
tina/config.ts, tina/__generated__/
public/
  assets/jcv-logo.png, john-banner.jpg, investments/, blog/
  uyic_cover.jpg, integral_cover.png
  pdfs/, uploads/, admin/
docs/PROJECT_SPEC.md, docs/EDITOR_GUIDE.md
```

---

## Local commands (fresh machine)

```bash
cd ~/Documents/code/jcv
# or: git clone … && git checkout modernize-tinacms
pnpm install
pnpm dev
# http://localhost:3000
# http://localhost:3000/admin
# Tina GraphQL: http://localhost:4001/graphql
```

Production-like build without Cloud:

```bash
pnpm run build:local
```

**Note:** Running `next dev` alone (without `tinacms dev`) will 500 on Tina-backed pages — GraphQL won’t be on `:4001`.

---

## Git situation

| Item | State |
|------|--------|
| `origin` | `https://github.com/johnchisholmventures/jcv.git` |
| `master` / `origin/master` | Still **old** production site (Next 12 era) |
| `modernize-tinacms` | Tina rewrite committed earlier; **redesign largely uncommitted** as of this update |
| Remote preview | After push + Vercel: branch/PR preview URL for John |
| Production | Unchanged until merge to `master` |

### Preview-before-master workflow

1. Commit redesign → push `modernize-tinacms`  
2. Open PR → Vercel preview URL  
3. Share URL with John  
4. Wire TinaCloud so he can try `/admin` on preview if desired  
5. Merge when approved  

---

## Design / brand notes (current system)

| Token / asset | Value / path |
|---------------|----------------|
| Background | `#F6F3ED` |
| Text | `#191817` / muted `#625F59` |
| Primary accent | Violet `#5835A5` / dark `#382263` |
| Gold (sparing) | `#B08A45` |
| Masthead | `/assets/jcv-logo.png` (John Chisholm Ventures) |
| Hero photo | `/assets/john-banner.jpg` (upgrade if better speaking photo available) |
| Book covers | `/uyic_cover.jpg`, `/integral_cover.png` |
| Primary conversion | Invite John to Speak → `/contact` |
| Secondary conversion | Watch talks → homepage `#talks` / `/talks` |

Do **not**: present site as an active VC fund, invite pitch decks, invent testimonials/metrics, or drop Team/Dickey from nav without client request.

---

## Decisions log

| Decision | Choice | Why |
|----------|--------|-----|
| CMS | TinaCMS + TinaCloud Free | Git-backed, 2 free seats, admin UI for John |
| Next routing | App Router | Official Tina preferred path |
| React | 18.3 | Tina peer deps |
| Package manager | pnpm | Tina docs recommendation |
| Content path | `content/*` | Tina convention |
| Intermediate Pages+Tina hybrid | Abandoned | Did not follow official guide |
| Homepage positioning | Speaker-first | Organizers invite John; not article warehouse |
| Masthead | JCV logo | Client expects firm identity |
| Team page | First-class nav | John + Dickey must be visible |
| Investments framing | Venture history | Experience evidence, not solicitation |
| Books | Hub + external Integral | Two books; Integral has own site |
| Contact v1 | Placeholder | No confirmed form/email yet |
| Testimonials v1 | Marked placeholders | Do not invent praise |

---

## Suggested next agent prompt

> Continue JCV on branch `modernize-tinacms` in `~/Documents/code/jcv`. Read `docs/PROJECT_SPEC.md`. Commit all redesign work if still uncommitted, push the branch, open a PR for Vercel preview, and set up TinaCloud Free + Vercel env vars (`NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`) so we can share a preview URL with John. Then smoke-test `/admin` and content flows before any merge to `master`.

---

## References

- https://tina.io/docs/frameworks/next/app-router  
- https://tina.io/docs/tinacloud/overview  
- https://tina.io/pricing (Free = 2 users)  
- https://github.com/johnchisholmventures/jcv  
- Design brief: speaker-first homepage (this session) + `PRODUCT.md` / `DESIGN.md`  

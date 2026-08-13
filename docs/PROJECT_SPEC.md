# JCV modernization — project spec & handoff

**Purpose:** Restart context for agents/humans continuing this work.  
**Updated:** 2026-08-03  
**Branch:** `modernize-tinacms` (on GitHub; Vercel preview + TinaCloud **live**)  
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
| Publish model | John saves in `/admin` → TinaCloud commits to GitHub → Vercel rebuild |
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
| Speaker-first redesign (homepage + templates) | **Done** (committed + pushed) |
| JCV logo masthead + Team (John + Dickey) | **Done** |
| Books hub (Unleash + Integral) | **Done** |
| Commit redesign + push `modernize-tinacms` | **Done** |
| GitHub access (`agstover` collaborator on client repo) | **Done** |
| TinaCloud project on `johnchisholmventures/jcv` | **Done** |
| Index `modernize-tinacms` on TinaCloud | **Done** |
| Vercel env: Client ID + Token | **Done** |
| Vercel **system env vars** enabled (`VERCEL_GIT_COMMIT_REF`, etc.) | **Done** (was the build blocker) |
| Vercel preview build green on `modernize-tinacms` | **Done** |
| Open PR into `master` | **TODO** (if not already open) |
| Share preview URL with John | **TODO** |
| Invite John as TinaCloud 2nd user | **TODO** |
| Client smoke-test `/admin` + content flows | **TODO** |
| Merge to `master` + production cutover | **TODO** (after sign-off) |
| Real contact form / email | **TODO** (placeholder) |
| Rewrite older “we/firm” CMS body copy | **TODO** (optional / editorial) |
| Rotate Tina token (was briefly in generated client history) | **TODO** (security hygiene) |

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
| `pnpm build` | `bash scripts/vercel-build.sh` | Production **with** TinaCloud (logs branch resolution) |
| `pnpm build:local` | `tinacms build --local --skip-cloud-checks -c "NODE_ENV=production next build"` | Local without Cloud |
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

Hero → recognition strip → speaking topics → featured talks (modal, no autoplay) → experience → ventures → **books (Unleash + Integral)** → Tina-backed People & Places photo grid → selected writing → invite band.

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
- People & Places replaces placeholder testimonials with real photo evidence

### 5. Docs in tree

- `README.md` — short developer overview  
- `docs/EDITOR_GUIDE.md` — client-facing how to add a post  
- `docs/PROJECT_SPEC.md` — this handoff  
- `PRODUCT.md` / `DESIGN.md` — product + design system  
- `.env.example` — `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`  
- `scripts/vercel-build.sh` — CI build that prints Tina branch resolution

### 6. Ship path completed (2026-08-03)

#### GitHub

- Canonical repo: **`johnchisholmventures/jcv`** (client-owned). Personal `agstover/jcv` is a stale historical fork — do not treat as source of truth.
- Developer works as **`agstover`** with **Write collaborator** access on the client repo (do not log in as the client account for day-to-day work).
- Branch **`modernize-tinacms`** pushed with redesign + Tina setup + `tina/tina-lock.json`.
- Production **`master`** remains the **old** Next 12 site until merge.

#### TinaCloud ([app.tina.io](https://app.tina.io))

- Project connected to **`johnchisholmventures/jcv`** (existing repo — not “create from template”).
- **Do not** re-run `tinacms init` on this project; schema already exists on `modernize-tinacms`.
- `tina/tina-lock.json` must stay committed (required for indexing).
- **`modernize-tinacms` is indexed** (`status: complete`).
- **`master` and `dev` stay unindexed** until the redesign is merged (they have no `tina/` schema). That is expected.
- Free plan: 2 users — invite John when ready for smoke-test.

#### Vercel

- Project deploys from **`johnchisholmventures/jcv`**.
- Install: `pnpm install` · Build: `pnpm build` → `scripts/vercel-build.sh`.
- **Manual env vars (only these for Tina):**
  - `NEXT_PUBLIC_TINA_CLIENT_ID`
  - `TINA_TOKEN`
- **System env vars must be enabled** on the Vercel project (Settings → Environment Variables → enable access to system environment variables). Without this, `VERCEL_GIT_COMMIT_REF` is empty and Tina falls back to **`master`** → build fails.
- Do **not** set `NEXT_PUBLIC_TINA_BRANCH` in normal use; let Vercel set the branch via `VERCEL_GIT_COMMIT_REF`.
- Preview on **`modernize-tinacms`**: **build is green**. Production/`master` will still fail Tina checks until merge.

#### Branch resolution (how Tina picks a branch)

```ts
// tina/config.ts — priority order
process.env.NEXT_PUBLIC_TINA_BRANCH ||
process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
process.env.VERCEL_GIT_COMMIT_REF ||   // Vercel system (must be enabled)
process.env.HEAD ||
'master'                              // fallback only
```

Build log from `scripts/vercel-build.sh` prints which vars are set and `>>> Using Tina branch: …`. Healthy preview log should show `modernize-tinacms`, not `master`.

#### Local cloud build test (no Vercel)

```bash
cd ~/Documents/code/jcv
set -a && source .env && set +a   # CLIENT_ID + TINA_TOKEN
export VERCEL_GIT_COMMIT_REF=modernize-tinacms
pnpm run build
```

### 7. Verified

- Local `pnpm build` with cloud credentials + `modernize-tinacms` succeeds.
- Local `pnpm build:local` succeeds (29 routes).
- Vercel preview of `modernize-tinacms` succeeds after system env vars enabled.

---

## What we have left to do

### A. Client review → production (next)

1. **Confirm / open PR** `modernize-tinacms` → `master` (if not open).
2. **Share Vercel preview URL** with John for design/content review.
3. **TinaCloud:** invite John as 2nd collaborator; add preview Site URL(s) in Tina project config if `/admin` login is blocked (include Vercel preview glob + `http://localhost:3000`).
4. **Smoke-test with John**
   - Open `https://<preview>/admin`
   - Draft post → save → confirm GitHub commit + Vercel rebuild
   - Article / video / external formats
   - Topic filters on `/talks`; featured content
   - Team bios; investments cards
5. **Merge to `master`** only after sign-off → production cutover.
6. After merge: Tina will index **`master`**; Production builds should pass; reindex in TinaCloud Configuration if needed.
7. **Rotate `TINA_TOKEN`** (token briefly appeared in generated `client.ts` history on a public repo). Create new token in TinaCloud → update Vercel + local `.env` → revoke old token.

### B. Content & conversion gaps (expected client feedback)

| Item | Notes |
|------|--------|
| **Contact / speaking inquiry** | `/contact` is a placeholder (LinkedIn/X). Wire real email or form when John provides it. |
| **People & Places** | Tina-backed photo grid for talks, workshops, and public conversations. Add real captions only; do not imply institutional endorsement. |
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
- Dual-repo workflow (personal fork as live source) — abandoned in favor of one client repo + collaborator.

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
tina/config.ts, tina/tina-lock.json, tina/__generated__/
scripts/vercel-build.sh                # Vercel build + branch logging
public/
  assets/jcv-logo.png, john-banner.jpg, john/, investments/, blog/
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
# .env: NEXT_PUBLIC_TINA_CLIENT_ID + TINA_TOKEN (gitignored)
pnpm dev
# http://localhost:3000
# http://localhost:3000/admin
# Tina GraphQL: http://localhost:4001/graphql
```

Production-like build without Cloud:

```bash
pnpm run build:local
```

Cloud build (matches Vercel Tina checks):

```bash
set -a && source .env && set +a
export VERCEL_GIT_COMMIT_REF=modernize-tinacms
pnpm run build
```

**Note:** Running `next dev` alone (without `tinacms dev`) will 500 on Tina-backed pages — GraphQL won’t be on `:4001`.

---

## Git situation

| Item | State |
|------|--------|
| `origin` | `johnchisholmventures/jcv` |
| `master` / `origin/master` | Still **old** production site (Next 12 era); **not** Tina-indexed |
| `modernize-tinacms` | New site + redesign + Tina; **indexed on TinaCloud**; Vercel preview **green** |
| `dev` | Old side branch; unindexed — ignore for Tina |
| Production | Unchanged until merge to `master` |

### Ownership model (keep it simple)

| Role | Who | Tool |
|------|-----|------|
| Repo owner | Client account `johnchisholmventures` | GitHub |
| Developer | `agstover` (collaborator) | Git + Vercel |
| Hosting | Vercel → client repo | Vercel |
| CMS backend | TinaCloud → same client repo | app.tina.io |
| Editors | You + John (2 free seats) | `/admin` |

### Preview → production workflow

1. ~~Commit redesign → push `modernize-tinacms`~~ **Done**  
2. ~~TinaCloud + Vercel env + system env vars~~ **Done**  
3. ~~Vercel preview green~~ **Done**  
4. Share preview URL with John  
5. Invite John to Tina; smoke-test `/admin`  
6. Merge PR when approved → reindex `master` if needed → production  

---

## Design / brand notes (current system)

| Token / asset | Value / path |
|---------------|----------------|
| Background | `#F6F3ED` |
| Text | `#191817` / muted `#625F59` |
| Primary accent | Violet `#5835A5` / dark `#382263` |
| Gold (sparing) | `#B08A45` |
| Masthead | `/assets/jcv-logo.png` (John Chisholm Ventures) |
| Hero photo | `/assets/john/john-chisholm-current-portrait-preferred.jpg` |
| Book covers | `/uyic_cover.jpg`, `/integral_cover.png` |
| Primary conversion | Contact John / What can John do for you? → `/contact` |
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
| People & Places v1 | Tina-backed photo grid | Social proof without invented praise |
| Git ownership | One client repo + collaborator | Avoid dual personal/client fork chaos |
| Tina init checklist | Skip re-init | Schema already on `modernize-tinacms` |
| Branch for Tina builds | Vercel system `VERCEL_GIT_COMMIT_REF` | Must enable system env vars on Vercel |

---

## Lessons / gotchas (Tina + Vercel)

1. **Only two Tina secrets:** `NEXT_PUBLIC_TINA_CLIENT_ID` + `TINA_TOKEN`. Branch is not a manual env var in normal use.
2. **Enable Vercel system environment variables** or every Tina build targets fallback `master` and fails.
3. **Default branch `master` has no Tina schema** until merge; unindexed `master`/`dev` in TinaCloud UI is expected.
4. **`tina/tina-lock.json` must be on the branch** you index; generate via `tinacms dev` (not only `tinacms build`).
5. **Do not run `npx @tinacms/cli init`** on this already-initialized project.
6. **Never commit live tokens** in `tina/__generated__/client.ts` (public repo). Rotate if leaked.

---

## Suggested next agent prompt

> Continue JCV on branch `modernize-tinacms` in `~/Documents/code/jcv`. Read `docs/PROJECT_SPEC.md`. Preview is live on Vercel with TinaCloud. Open/share the PR and preview URL with John, invite him as the 2nd TinaCloud user, smoke-test `/admin` (create draft post, save, rebuild), then merge to `master` only after sign-off. After merge, confirm Production deploy + Tina index on `master`. Rotate `TINA_TOKEN` if not already done.

---

## References

- https://tina.io/docs/frameworks/next/app-router  
- https://tina.io/docs/tinacloud/overview  
- https://tina.io/docs/tinacloud/troubleshooting  
- https://vercel.com/docs/environment-variables/system-environment-variables  
- https://tina.io/pricing (Free = 2 users)  
- https://github.com/johnchisholmventures/jcv  
- Design: `PRODUCT.md` / `DESIGN.md`  

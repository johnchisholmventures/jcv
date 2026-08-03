# JCV modernization — project spec & handoff

**Purpose:** Restart context for agents/humans continuing this work.  
**Date:** 2026-08-02  
**Branch:** `modernize-tinacms` (local; push when ready for Vercel preview)  
**Repo:** https://github.com/johnchisholmventures/jcv  
**Working directory:** `~/Documents/code/jcv`  
**Backup of prior attempt:** `~/Documents/code/jcv-old` (can delete after you’re confident)

---

## Goal

Modernize the John Chisholm Ventures marketing site so:

1. **John** (non-technical client) can create/edit posts, videos, and links via a web admin UI without emailing a developer.
2. Content stays **in GitHub** (markdown), edited through **TinaCMS** (free TinaCloud plan: 2 users).
3. Stack is current: **Next.js 15 App Router + Tina 3**, following the [official App Router guide](https://tina.io/docs/frameworks/next/app-router).
4. Preview the new site on a **branch/PR** before merging to `master` / production.

---

## Client & product context

| Item | Detail |
|------|--------|
| Client | John Chisholm — prefers not to touch Git/markdown by hand |
| Pain today | Emails docs → developer hand-edits `_posts` + frontmatter + assets + deploy |
| Domain / live site | Production still on **old** `master` until PR is merged |
| CMS choice | TinaCMS + GitHub; **TinaCloud Free** ($0, 2 users: you + John) |
| Publish model (planned) | John saves in `/admin` → commit to GitHub → Vercel rebuild |

### Content types (posts)

| Format | Behavior |
|--------|----------|
| `article` | Body on-site at `/posts/[slug]` |
| `video` | YouTube embed via `youtubeId` |
| `external` | Homepage card links out via `externalUrl` (no local post page required) |

### Topics (controlled list)

`entrepreneurship`, `regulation`, `governance`, `economics`, `innovation`, `education`, `interview`, `ai`, `personal-development`

Also: `featured` + `featuredOrder`, `draft` (hidden when true).

---

## What we did (completed)

### Architecture rewrite

- Abandoned in-place Next 12 / Pages Router “bolt Tina on” approach after it diverged from official docs.
- **Greenfield** Next 15 App Router app via `create-next-app`.
- Installed `tinacms` + `@tinacms/cli`; config and data fetching aligned with [Tina Next App Router docs](https://tina.io/docs/frameworks/next/app-router).
- React pinned to **18.3.1** (Tina admin peers; Next 15 supports it).
- Package manager: **pnpm** (Tina recommends it).
- Tailwind **v4** (`@import "tailwindcss"`, `@theme` in `app/globals.css`).

### Content migration

- Old `_posts/` / `_pages/` → **`content/`**:
  - `content/posts/*.md` (21 posts)
  - `content/team/*.md`
  - `content/pages/{mission,educators,investments}.md`
  - `content/investments/*.md` (was hardcoded in old `pages/investments.js`)
- Frontmatter normalized: `format`, `topics`, `featured`, `featuredOrder`, `draft`, `externalUrl`, `youtubeId`, author object.
- Media stays under `public/assets/`, uploads target `public/uploads/`.
- Legacy PDF short URLs preserved via rewrites: `/cv`, `/regulation`, `/dei`, `/deipres`.

### App Router routes

| Route | Implementation |
|-------|----------------|
| `/` | `app/page.tsx` — `client.queries.postConnection`, featured carousel + topic filters |
| `/posts/[...filename]` | Server page + **`client-page.tsx` with `useTina`** (official visual-edit pattern) |
| `/mission`, `/team`, `/investments`, `/educators`, `/uyic` | Server components + Tina queries |
| `/admin` | Tina admin SPA (`public/admin/` from `tinacms build`), rewrite `/admin` → `/admin/index.html` |

### Data layer (official pattern)

```ts
import { client } from '@/tina/__generated__/client'
const { data } = await client.queries.postConnection({ last: 100 })
// single post:
await client.queries.post({ relativePath: `${filename}.md` })
```

Rich text: `TinaMarkdown` via `components/TinaContent.tsx`.  
**Not** using the abandoned parallel `gray-matter` public site reader from the intermediate attempt.

### Scripts (`package.json`)

| Script | Command | When |
|--------|---------|------|
| `pnpm dev` | `tinacms dev -c "next dev --turbopack"` | Local dev + local GraphQL |
| `pnpm build` | `tinacms build && NODE_ENV=production next build` | Production **with** TinaCloud credentials |
| `pnpm build:local` | `tinacms build --local --skip-cloud-checks -c "NODE_ENV=production next build"` | Local/CI without Cloud |
| `pnpm start` | `NODE_ENV=production next start` | Serve production build |

**Important:** Tina’s CLI can set a nonstandard `NODE_ENV`; force `NODE_ENV=production` for `next build` or 404/`Html` prerender errors appear.

### Verified

- `pnpm run build:local` succeeded: **26 static routes** generated (home, pages, post SSG paths, etc.).
- Admin HTML generated at `public/admin/index.html`.

### Docs already in tree

- `README.md` — short developer overview  
- `docs/EDITOR_GUIDE.md` — client-facing how to add a post  
- `docs/PROJECT_SPEC.md` — this handoff  
- `.env.example` — `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`

---

## What we did **not** do (still TODO)

### Must do before John can self-serve on a preview/production URL

1. **Push branch** `modernize-tinacms` to GitHub (`git push -u origin modernize-tinacms`).
2. **Open PR** into `master` (optional but good for Vercel preview + review).
3. **Vercel**
   - Confirm project is linked to `johnchisholmventures/jcv`.
   - Preview deploy of the branch/PR → share URL with John for design/content review.
   - Production build command: `pnpm build` (or `pnpm install && pnpm build`).
   - Install command: `pnpm install` (set package manager to pnpm).
4. **TinaCloud Free** ([app.tina.io](https://app.tina.io))
   - Create project, connect this GitHub repo.
   - Copy Client ID + token → Vercel env:
     - `NEXT_PUBLIC_TINA_CLIENT_ID`
     - `TINA_TOKEN`
   - Invite John as 2nd user.
   - Confirm `/admin` login on preview/production.
5. **Smoke-test with John**
   - Create a draft post, save, confirm commit + rebuild.
   - Video + external link + article formats.
   - Topics filters + featured carousel.
6. **Merge to `master`** only after sign-off → production cutover.

### Nice-to-have / polish (not blocking)

- Visual editing / click-to-edit beyond basic `useTina` on post pages (extend to mission/team if desired).
- Remove create-next-app leftover SVGs in `public/` (`next.svg`, etc.).
- Drafts UX and homepage exclusion already filter `draft`; confirm all edge cases.
- PDF “documents” collection (today short URLs still need `next.config` rewrites for static PDFs).
- Accessibility pass, OG metadata cleanup on post client page (meta tags in client component are imperfect; prefer `generateMetadata` on server page).
- Dependabot / periodic Tina upgrades.
- Delete `~/Documents/code/jcv-old` when no longer needed.
- `npm audit` noise: largely Tina CLI/admin transitive deps; do **not** `audit fix --force` (can downgrade Next). Overrides optional later.

### Explicitly out of scope so far

- Design overhaul (kept look/feel close to original purple/grey branding).
- Self-hosted Tina (using TinaCloud Free instead).
- Editorial Workflow / paid Tina tiers.
- Migrating off GitHub as CMS.

---

## Key files map

```
app/
  layout.tsx, page.tsx, globals.css
  posts/[...filename]/page.tsx      # SSG + generateStaticParams
  posts/[...filename]/client-page.tsx # useTina
  mission|team|investments|educators|uyic/page.tsx
components/                          # UI (TSX)
content/                             # CMS markdown (source of truth)
tina/config.ts                       # Schema / collections
tina/__generated__/                  # Client + types (regenerated by tinacms build)
public/assets|pdfs|uploads|admin/
docs/PROJECT_SPEC.md                 # This file
docs/EDITOR_GUIDE.md                 # For John
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
```

Without Cloud credentials, local admin writes to disk via Tina local mode.  
Production-like build without Cloud:

```bash
pnpm run build:local
```

---

## Git situation (as of handoff commits)

| Item | State |
|------|--------|
| `origin` | `https://github.com/johnchisholmventures/jcv.git` |
| `master` / `origin/master` | Still **old** production site (Next 12 era) |
| `modernize-tinacms` | New work; **commit locally**, push for preview |
| Remote preview | After push + Vercel: branch/PR preview URL for John |
| Production | Unchanged until merge to `master` |

### Preview-before-master workflow

1. Push `modernize-tinacms`  
2. Open PR → Vercel preview URL  
3. Share URL with John  
4. Wire TinaCloud so he can try `/admin` on preview if desired  
5. Merge when approved  

---

## Design / brand notes

- Purple: `#6632ff` (`default-purple`)
- Grey: `#4a4a4a` (`default-grey`)
- Logo: `/assets/jcv-logo.png`
- Hero banner: `/assets/john-banner.jpg`
- External nav: Unleash Your Inner Company, Integral Poem sites

---

## Decisions log

| Decision | Choice | Why |
|----------|--------|-----|
| CMS | TinaCMS + TinaCloud Free | Git-backed, 2 free seats, admin UI for John |
| Next routing | App Router | Official Tina preferred path |
| React | 18.3 | Tina peer deps |
| Package manager | pnpm | Tina docs recommendation |
| Content path | `content/*` | Tina convention |
| Intermediate Pages+Tina hybrid | Abandoned | Did not follow official guide; dual content APIs |
| Investments | CMS collection | Was hardcoded in JS |

---

## Suggested next agent prompt

> Continue JCV modernization on branch `modernize-tinacms` in `~/Documents/code/jcv`. Read `docs/PROJECT_SPEC.md`. Push the branch, open a PR for Vercel preview, and set up TinaCloud Free + Vercel env vars so we can share a preview URL with the client before merging to master.

---

## References

- https://tina.io/docs/frameworks/next/app-router  
- https://tina.io/docs/tinacloud/overview  
- https://tina.io/pricing (Free = 2 users)  
- https://github.com/johnchisholmventures/jcv  

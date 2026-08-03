# John Chisholm Ventures

Next.js **App Router** site with **TinaCMS** (GitHub as the content database), set up per the [official Tina App Router guide](https://tina.io/docs/frameworks/next/app-router).

> **Handoff / full project status:** see **[docs/PROJECT_SPEC.md](./docs/PROJECT_SPEC.md)** — completed Tina + design work, remaining ship path (commit/push, Vercel, TinaCloud, client smoke-test), content gaps, and restart prompt for a new agent session.

## Stack

- Next.js 15 (App Router)
- React 18
- TinaCMS 3 + `@tinacms/cli`
- Tailwind CSS 4
- Content: Markdown in `content/`

## Local development

```bash
pnpm install
pnpm dev
```

- Site: http://localhost:3000  
- Admin: http://localhost:3000/admin  

`pnpm dev` runs `tinacms dev -c "next dev --turbopack"` so the local GraphQL content API is available while you work.

### Without TinaCloud credentials

Local mode indexes files on disk. Production editing for non-devs needs TinaCloud (free tier: 2 users).

## Production (TinaCloud Free)

1. Create a project at [app.tina.io](https://app.tina.io) and connect this GitHub repo  
2. Set env vars on Vercel:

   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=...
   TINA_TOKEN=...
   ```

3. Build command: `pnpm build` → `tinacms build && next build`  
4. Invite the second free user (John)  
5. Open `https://your-domain/admin`

## Content model

| Collection | Path | Purpose |
|------------|------|---------|
| Resources / Posts | `content/posts/` | Articles, videos, external links |
| Team | `content/team/` | Bios |
| Investments | `content/investments/` | Portfolio cards |
| Site pages | `content/pages/` | Mission, educators, investments intro |

Media uploads go to `public/uploads/`.

## Editor guide

See [docs/EDITOR_GUIDE.md](./docs/EDITOR_GUIDE.md).

## Data fetching (official pattern)

Pages use the generated Tina client:

```ts
import { client } from '@/tina/__generated__/client'

const { data } = await client.queries.postConnection()
```

Post detail pages use `useTina` on a client component for visual editing, as in the [App Router docs](https://tina.io/docs/frameworks/next/app-router).

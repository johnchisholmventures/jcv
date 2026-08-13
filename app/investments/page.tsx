import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import TinaContent from '@/components/TinaContent'
import { normalizeMediaPath } from '@/lib/media'
import { client } from '@/tina/__generated__/client'
import type { Metadata } from 'next'
import Link from 'next/link'

const LOGO_FALLBACKS = [
  { match: 'cast', logo: '/assets/investments/cast_app.png' },
  { match: 'confirmit', logo: '/assets/investments/customersat.png' },
  { match: 'customersat', logo: '/assets/investments/customersat.png' },
  { match: 'google', logo: '/assets/investments/decisive_technology.png' },
  { match: 'decisive', logo: '/assets/investments/decisive_technology.png' },
  { match: 'highfive', logo: '/assets/investments/hifive.png' },
  { match: 'parley', logo: '/assets/investments/hifive.png' },
  { match: 'pyze', logo: '/assets/investments/pyze.png' },
  { match: 'qnect', logo: '/assets/investments/qnect.jpg' },
]

export const metadata: Metadata = {
  title: 'Venture History',
  description:
    'Companies John Chisholm has founded, invested in, or advised across four decades in technology.',
  alternates: { canonical: '/investments' },
}

function VentureCard({
  picture,
  name,
  site,
  description,
}: {
  picture?: string | null
  name?: string | null
  site?: string | null
  description?: string | null
}) {
  const logo = getLogoPath(picture, name)
  const body = (
    <>
      <div className="flex h-12 items-center">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="max-h-10 w-auto max-w-[10rem] object-contain object-left opacity-90"
            src={logo}
            alt=""
            width={160}
            height={40}
          />
        ) : null}
      </div>
      {name ? (
        <h2 className="font-display mt-5 text-xl text-foreground">{name}</h2>
      ) : null}
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
      {site ? (
        <p className="mt-4 text-sm font-semibold text-violet">Visit site →</p>
      ) : null}
    </>
  )

  const className =
    'card-surface flex h-full flex-col p-5 no-underline transition-shadow hover:shadow-[var(--shadow-elevated)] md:p-6'

  if (site) {
    return (
      <a
        href={site}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {body}
      </a>
    )
  }

  return <div className={className}>{body}</div>
}

function getLogoPath(picture?: string | null, name?: string | null) {
  if (picture) {
    return normalizeMediaPath(picture)
  }

  const normalizedName = (name || '').toLowerCase()
  return LOGO_FALLBACKS.find((item) => normalizedName.includes(item.match))
    ?.logo
}

export default async function InvestmentsPage() {
  const [pageRes, invRes] = await Promise.all([
    client.queries.page({ relativePath: 'investments.md' }),
    client.queries.investmentConnection({ last: 50 }),
  ])

  const investments = (invRes.data.investmentConnection?.edges || [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

  return (
    <PageShell>
      <BackLink />
      <PageHeader
        eyebrow="A career in technology"
        title="Companies founded, backed, and advised"
        description="This page documents career history—not an active fund solicitation. There is no pitch submission process here."
      />

      <div className="mt-8 max-w-3xl">
        <TinaContent content={pageRes.data.page.body} />
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {investments.map((item) => (
          <li key={item.id || item.name}>
            <VentureCard
              picture={item.picture}
              name={item.name}
              site={item.site}
              description={item.description}
            />
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-col gap-3 border-t border-divider pt-10 sm:flex-row sm:flex-wrap">
        <Link href="/contact" className="btn btn-primary">
          Contact John
        </Link>
        <Link href="/team" className="btn btn-secondary">
          Read John’s biography
        </Link>
      </div>
    </PageShell>
  )
}

import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import TinaContent from '@/components/TinaContent'
import { normalizeMediaPath } from '@/lib/media'
import { client } from '@/tina/__generated__/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'The John Chisholm Ventures team—John Chisholm and Dickey Singh—entrepreneurs, advisors, and technology leaders.',
  alternates: { canonical: '/team' },
}

/** Optional short roles for the team roster cards (not full bios). */
const ROLE_BY_NAME: Record<string, string> = {
  'John Chisholm': 'Founder · Entrepreneur, author, and speaker',
  'Dickey Singh': 'Entrepreneur · Technology leader and co-founder',
}

export default async function TeamPage() {
  const { data } = await client.queries.teamConnection({ last: 50 })
  const persons = (data.teamConnection?.edges || [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

  return (
    <PageShell>
      <BackLink />
      <PageHeader
        eyebrow="Team"
        title="John Chisholm Ventures"
        description="The people behind the firm’s speaking, writing, and entrepreneurial work—led by John Chisholm, with long-time collaborator Dickey Singh."
      />

      {/* Roster cards — makes both people visible at a glance */}
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {persons.map((person) => {
          const picture = normalizeMediaPath(person.picture)
          const role =
            (person.name && ROLE_BY_NAME[person.name]) ||
            'John Chisholm Ventures'
          const anchor = person.name
            ? person.name.toLowerCase().replace(/\s+/g, '-')
            : undefined

          return (
            <li key={person.id || person.name}>
              <a
                href={anchor ? `#${anchor}` : undefined}
                className="card-surface flex h-full items-center gap-5 p-5 no-underline transition-shadow hover:shadow-[var(--shadow-elevated)] md:p-6"
              >
                {picture ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="h-20 w-20 shrink-0 rounded-[var(--radius-card)] border border-divider object-cover object-top sm:h-24 sm:w-24"
                    src={picture}
                    alt=""
                    width={96}
                    height={96}
                  />
                ) : null}
                <div className="min-w-0">
                  <h2 className="font-display text-xl text-foreground md:text-2xl">
                    {person.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{role}</p>
                  <p className="mt-3 text-sm font-semibold text-violet">
                    Full bio ↓
                  </p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="mt-16 space-y-14 md:mt-20 md:space-y-16">
        {persons.map((person, index) => {
          const picture = normalizeMediaPath(person.picture)
          const anchor = person.name
            ? person.name.toLowerCase().replace(/\s+/g, '-')
            : undefined
          const role =
            (person.name && ROLE_BY_NAME[person.name]) || undefined

          return (
            <article
              key={person.id || person.name}
              id={anchor}
              className={
                index > 0
                  ? 'scroll-mt-28 border-t border-divider pt-14 md:pt-16'
                  : 'scroll-mt-28'
              }
            >
              <div className="grid items-start gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-12">
                <div className="text-center md:text-left">
                  {picture ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="mx-auto aspect-square w-full max-w-[15rem] rounded-[var(--radius-card)] border border-divider object-cover object-top shadow-[var(--shadow-card)] md:mx-0"
                      src={picture}
                      alt={person.name || ''}
                      width={280}
                      height={280}
                    />
                  ) : null}
                  <h2 className="font-display mt-5 text-2xl text-foreground">
                    {person.name}
                  </h2>
                  {role ? (
                    <p className="mt-2 text-sm font-medium text-violet">
                      {role}
                    </p>
                  ) : null}
                  <div className="mt-3 flex justify-center gap-2 md:justify-start">
                    {person.twitter ? (
                      <a
                        href={person.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on X`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-divider text-muted transition-colors hover:border-violet hover:text-violet"
                      >
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    ) : null}
                    {person.linkedIn ? (
                      <a
                        href={person.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on LinkedIn`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-divider text-muted transition-colors hover:border-violet hover:text-violet"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="min-w-0">
                  <TinaContent content={person.body} />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-divider pt-10 sm:flex-row sm:flex-wrap">
        <Link href="/contact" className="btn btn-primary">
          Contact John
        </Link>
        <Link href="/investments" className="btn btn-secondary">
          Explore venture history
        </Link>
        <a href="/cv" className="btn btn-secondary">
          Download CV
        </a>
      </div>
    </PageShell>
  )
}

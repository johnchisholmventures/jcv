import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unleash Your Inner Company',
  description:
    'Unleash Your Inner Company by John Chisholm—a practical process for discovering business opportunities at the intersection of unmet needs and your own abilities.',
  alternates: { canonical: '/uyic' },
}

export default function UyicPage() {
  return (
    <PageShell>
      <BackLink href="/books" label="Back to books" />
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <figure className="mx-auto w-full max-w-[18rem] lg:mx-0 lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uyic_cover.jpg"
            alt="Cover of Unleash Your Inner Company by John Chisholm"
            className="w-full rounded-[var(--radius-card)] border border-divider shadow-[var(--shadow-elevated)]"
            width={480}
            height={720}
          />
        </figure>

        <div>
          <PageHeader
            eyebrow="Books · For entrepreneurs"
            title="Unleash Your Inner Company"
            description={
              <>
                Turn what you already possess into a company only you could
                build. John presents a practical process for discovering
                business opportunities at the intersection of unmet customer
                needs and your own abilities, interests, relationships, and
                values.
              </>
            }
          />

          <div className="mt-8 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Written for aspiring founders, students, and anyone considering
              entrepreneurship, the book offers a 10-step guide to discover,
              launch, and scale an ideal business—grounded in John’s experience
              founding and leading technology companies.
            </p>
            <p>
              Educators can build course syllabi around the framework;
              complimentary classroom copies may be available for qualified
              programs.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://unleashyourinnercompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit the book site
            </a>
            <Link href="/educators" className="btn btn-secondary">
              For educators
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Invite John to Speak
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted">
            Complimentary classroom copies may be available for qualified
            entrepreneurship educators.
          </p>

          <p className="mt-10 border-t border-divider pt-8 text-sm text-muted">
            Also by John:{' '}
            <a
              href="https://integralpoem.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet no-underline hover:text-violet-dark"
            >
              Integral: A Mathematical Odyssey
            </a>
            , a children’s book about mathematics—or see both on the{' '}
            <Link
              href="/books"
              className="font-semibold text-violet no-underline hover:text-violet-dark"
            >
              Books
            </Link>{' '}
            page.
          </p>
        </div>
      </div>
    </PageShell>
  )
}

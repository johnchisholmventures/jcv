import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Books',
  description:
    'Books by John Chisholm: Unleash Your Inner Company for entrepreneurs, and Integral—a children’s book about mathematics.',
  alternates: { canonical: '/books' },
}

export default function BooksPage() {
  return (
    <PageShell>
      <BackLink />
      <PageHeader
        eyebrow="Books"
        title="Two books, two audiences"
        description="John is the author of Unleash Your Inner Company, a practical guide for entrepreneurs, and Integral: A Mathematical Odyssey, a children’s book that opens a door to mathematics."
      />

      <div className="mt-14 space-y-12 md:space-y-16">
        {/* Unleash Your Inner Company */}
        <section
          id="unleash"
          className="scroll-mt-24"
          aria-labelledby="uyic-heading"
        >
          <div className="grid items-start gap-10 rounded-[var(--radius-card)] border border-divider bg-[color-mix(in_srgb,#f0e8d8_55%,var(--color-card))] p-6 shadow-[var(--shadow-card)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 md:p-10 lg:p-12">
            <figure className="mx-auto w-full max-w-[16rem] md:mx-0 md:max-w-[18rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uyic_cover.jpg"
                alt="Cover of Unleash Your Inner Company by John Chisholm"
                className="w-full rounded-md border border-divider shadow-[var(--shadow-elevated)]"
                width={400}
                height={600}
              />
            </figure>
            <div>
              <p className="eyebrow mb-4 text-gold">For entrepreneurs</p>
              <h2
                id="uyic-heading"
                className="font-display text-2xl text-foreground md:text-3xl lg:text-[2.15rem]"
              >
                Unleash Your Inner Company
              </h2>
              <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
                A practical process for discovering business opportunities at
                the intersection of unmet customer needs and your own abilities,
                interests, relationships, and values—written for aspiring
                founders, students, and anyone considering entrepreneurship.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/uyic" className="btn btn-primary">
                  Explore this book
                </Link>
                <Link href="/educators" className="btn btn-secondary">
                  For educators
                </Link>
                <a
                  href="https://unleashyourinnercompany.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Book site
                  <ExternalIcon />
                </a>
              </div>
              <p className="mt-6 text-sm text-muted">
                Complimentary classroom copies may be available for qualified
                entrepreneurship educators.
              </p>
            </div>
          </div>
        </section>

        {/* Integral */}
        <section
          id="integral"
          className="scroll-mt-24"
          aria-labelledby="integral-heading"
        >
          <div className="grid items-start gap-10 rounded-[var(--radius-card)] border border-divider bg-card p-6 shadow-[var(--shadow-card)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 md:p-10 lg:p-12">
            <figure className="mx-auto w-full max-w-[16rem] md:mx-0 md:max-w-[18rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/integral_cover.png"
                alt="Cover of Integral: A Mathematical Odyssey by John Chisholm, illustrated by Jean-François Robert"
                className="w-full rounded-md border border-divider shadow-[var(--shadow-elevated)]"
                width={400}
                height={600}
              />
            </figure>
            <div>
              <p className="eyebrow mb-4">For young readers</p>
              <h2
                id="integral-heading"
                className="font-display text-2xl text-foreground md:text-3xl lg:text-[2.15rem]"
              >
                Integral: A Mathematical Odyssey
              </h2>
              <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
                A children’s book about mathematics—an invitation to curiosity
                and wonder for young readers (and the adults who read with
                them). Illustrated by Jean-François Robert. Integral lives on
                its own site with more about the book and how to get it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://integralpoem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Integral
                  <ExternalIcon />
                </a>
              </div>
              <p className="mt-6 text-sm text-muted">
                Opens integralpoem.com in a new tab.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 opacity-90"
    >
      <path
        d="M5.5 3.5H3.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8.5M8 2.5h3.5V6M7 7l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

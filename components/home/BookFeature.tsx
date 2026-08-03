import Link from 'next/link'

export default function BookFeature() {
  return (
    <section
      id="book"
      className="scroll-mt-24 border-b border-divider py-16 md:py-20 lg:py-24"
      aria-labelledby="book-heading"
    >
      <div className="site-container">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4 text-gold">Books</p>
          <h2
            id="book-heading"
            className="section-heading text-3xl md:text-4xl lg:text-[2.45rem]"
          >
            Writing for founders—and for the next generation
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Unleash — primary for this site’s audience */}
          <article className="card-surface flex h-full flex-col overflow-hidden">
            <div className="grid flex-1 gap-6 p-6 sm:grid-cols-[7.5rem_1fr] sm:items-start md:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uyic_cover.jpg"
                alt="Cover of Unleash Your Inner Company by John Chisholm"
                className="mx-auto w-28 rounded-md border border-divider shadow-[var(--shadow-card)] sm:mx-0 sm:w-full"
                width={160}
                height={240}
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-violet">
                  For entrepreneurs
                </p>
                <h3 className="font-display mt-2 text-xl text-foreground md:text-[1.35rem]">
                  Unleash Your Inner Company
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.98rem]">
                  A practical process for discovering business opportunities at
                  the intersection of unmet needs and your abilities, interests,
                  relationships, and values.
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Link href="/uyic" className="btn btn-primary !min-h-11 text-sm">
                    Explore the book
                  </Link>
                  <Link
                    href="/educators"
                    className="btn btn-secondary !min-h-11 text-sm"
                  >
                    For educators
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Integral — external site */}
          <article className="card-surface flex h-full flex-col overflow-hidden">
            <div className="grid flex-1 gap-6 p-6 sm:grid-cols-[7.5rem_1fr] sm:items-start md:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/integral_cover.png"
                alt="Cover of Integral: A Mathematical Odyssey by John Chisholm"
                className="mx-auto w-28 rounded-md border border-divider shadow-[var(--shadow-card)] sm:mx-0 sm:w-full"
                width={160}
                height={240}
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-violet">
                  For young readers
                </p>
                <h3 className="font-display mt-2 text-xl text-foreground md:text-[1.35rem]">
                  Integral: A Mathematical Odyssey
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.98rem]">
                  A children’s book about mathematics—inviting curiosity and
                  wonder. Available on its own site.
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://integralpoem.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary !min-h-11 text-sm"
                  >
                    Visit Integral
                  </a>
                  <Link
                    href="/books#integral"
                    className="btn btn-secondary !min-h-11 text-sm"
                  >
                    On this site
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8">
          <Link href="/books" className="text-link text-sm">
            View both books
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

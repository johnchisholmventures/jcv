import Link from 'next/link'

export default function HomeHero() {
  return (
    <section className="border-b border-divider" aria-labelledby="hero-heading">
      <div className="site-container py-10 md:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="order-1 min-w-0">
            <p className="eyebrow mb-4">
              Entrepreneur · Author · International Speaker
            </p>
            <h1
              id="hero-heading"
              className="font-display text-3xl text-foreground sm:text-4xl md:text-5xl"
            >
              Four decades of building companies. A lifetime of ideas worth
              sharing.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              John Chisholm is a technology entrepreneur, author, and
              frequent university and conference speaker exploring what allows
              entrepreneurship, innovation, higher education, economic growth,
              and human potential to flourish.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn btn-primary">
                What can John do for you?
              </Link>
              <Link href="#talks" className="text-link">
                <PlayIcon />
                Watch Selected Talks
              </Link>
            </div>
          </div>

          <div className="order-2 min-w-0">
            <figure className="overflow-hidden rounded-[var(--radius-card)] border border-divider bg-card shadow-[var(--shadow-elevated)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/john/john-chisholm-speaking-podium.jpg"
                alt="John Chisholm speaking at a podium"
                className="aspect-[16/10] w-full object-cover object-center"
                width={1125}
                height={698}
                fetchPriority="high"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="9"
        cy="9"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7.25 5.8v6.4L12.5 9 7.25 5.8z" fill="currentColor" />
    </svg>
  )
}

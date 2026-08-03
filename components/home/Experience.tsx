import Link from 'next/link'

const PROOFS = [
  {
    value: '40+ years',
    label: 'Building and advising technology companies',
  },
  {
    value: 'Two companies founded',
    label: 'Both subsequently acquired',
  },
  {
    value: 'Global audiences',
    label: 'Talks and programs across North America, Europe, Asia, and Australia',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-divider py-16 md:py-20 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-[var(--radius-card)] border border-divider bg-card shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/blog/authors/chisholm.jpg"
              alt="Portrait of John Chisholm"
              className="aspect-[4/5] w-full object-cover object-top"
              width={640}
              height={800}
            />
          </figure>

          <div>
            <p className="eyebrow mb-4">Experience behind the ideas</p>
            <h2
              id="experience-heading"
              className="section-heading text-3xl md:text-4xl lg:text-[2.65rem]"
            >
              A founder’s perspective, earned firsthand
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>
                John Chisholm has spent more than four decades as an
                entrepreneur, CEO, investor, and adviser. He founded Decisive
                Technology, a pioneer in online survey software that is now part
                of Google, and CustomerSat, an enterprise feedback management
                company later acquired by MarketTools.
              </p>
              <p>
                His experience spans the emergence of personal computing, the
                growth of Silicon Valley, enterprise software, SaaS, mobile
                technology, and today’s debates over artificial intelligence and
                regulation.
              </p>
            </div>

            <dl className="mt-10 grid gap-5 sm:grid-cols-3">
              {PROOFS.map((item) => (
                <div
                  key={item.value}
                  className="border-t border-divider pt-4"
                >
                  <dt className="font-display text-lg text-foreground md:text-xl">
                    {item.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-muted">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/team" className="btn btn-primary">
                Meet the team
              </Link>
              <Link href="/team#john-chisholm" className="btn btn-secondary">
                John’s biography
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

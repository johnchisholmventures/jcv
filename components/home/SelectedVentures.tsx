import Link from 'next/link'

const VENTURES = [
  {
    name: 'Decisive Technology',
    relationship: 'Founder & CEO',
    description: 'Pioneer in online survey software—now part of Google.',
    logo: '/assets/investments/decisive_technology.png',
  },
  {
    name: 'CustomerSat',
    relationship: 'Founder & CEO',
    description:
      'Enterprise feedback management company, later acquired by MarketTools.',
    logo: '/assets/investments/customersat.png',
  },
  {
    name: 'Cast.app',
    relationship: 'Investor / adviser',
    description: 'Reports you can read, listen to, or watch.',
    logo: '/assets/investments/cast_app.png',
  },
  {
    name: 'Pyze',
    relationship: 'Investor / adviser',
    description: 'Application success and analytics platform.',
    logo: '/assets/investments/pyze.png',
  },
  {
    name: 'Highfive',
    relationship: 'Investor / adviser',
    description: 'High-resolution video conferencing for any room.',
    logo: '/assets/investments/hifive.png',
  },
  {
    name: 'Qnect',
    relationship: 'Investor / adviser',
    description: '3D model connections for steel structure construction.',
    logo: '/assets/investments/qnect.jpg',
  },
]

export default function SelectedVentures() {
  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-b border-divider bg-[color-mix(in_srgb,var(--color-card)_40%,var(--color-background))] py-16 md:py-20 lg:py-24"
      aria-labelledby="ventures-heading"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">A career in technology</p>
          <h2
            id="ventures-heading"
            className="section-heading text-3xl md:text-4xl lg:text-[2.65rem]"
          >
            Companies founded, backed, and advised
          </h2>
          <p className="lede mt-5">
            Across his career, John has founded, invested in, or advised
            technology businesses ranging from early Silicon Valley computing
            companies to enterprise software and SaaS ventures.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VENTURES.map((v) => (
            <li key={v.name}>
              <article className="card-surface flex h-full flex-col p-5 md:p-6">
                <div className="flex h-12 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.logo}
                    alt=""
                    className="max-h-10 w-auto max-w-[9rem] object-contain object-left opacity-90"
                    width={144}
                    height={40}
                  />
                </div>
                <h3 className="font-display mt-5 text-xl text-foreground">
                  {v.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet">
                  {v.relationship}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/investments" className="btn btn-secondary">
            Explore John’s Venture History
          </Link>
        </div>
      </div>
    </section>
  )
}

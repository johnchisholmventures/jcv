import Link from 'next/link'

export default function SpeakingInvite() {
  return (
    <section
      id="invite"
      className="scroll-mt-24 border-t border-divider bg-[color-mix(in_srgb,var(--color-card)_48%,var(--color-background))]"
      aria-labelledby="invite-heading"
    >
      <div className="site-container py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <h2
              id="invite-heading"
              className="font-display text-3xl text-foreground md:text-4xl lg:text-[2.65rem]"
            >
              What can John do for you?
            </h2>
            <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-muted">
              John frequently speaks at universities and conferences and writes
              on entrepreneurship, regulation, innovation, higher education, and
              economic growth. He is also available for selected conversations,
              workshops, and advisory discussions where his experience may be
              useful.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn btn-primary">
                Contact John
              </Link>
              <a href="/cv" className="btn btn-secondary">
                Download CV
              </a>
            </div>
            <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-muted sm:grid-cols-2">
              <li className="border-t border-divider pt-3">
                University and conference talks
              </li>
              <li className="border-t border-divider pt-3">
                Entrepreneurship workshops
              </li>
              <li className="border-t border-divider pt-3">
                Writing and commentary
              </li>
              <li className="border-t border-divider pt-3">
                Select advisory conversations
              </li>
            </ul>
          </div>

          <figure className="overflow-hidden rounded-[var(--radius-card)] border border-divider bg-card shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/john/uis-workshop-audience.jpg"
              alt="Audience attending a John Chisholm workshop at University of Illinois Springfield"
              className="aspect-[5/4] w-full object-cover object-center"
              width={1158}
              height={678}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

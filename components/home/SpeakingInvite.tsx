import Link from 'next/link'

export default function SpeakingInvite() {
  return (
    <section
      id="invite"
      className="scroll-mt-24 bg-violet text-on-violet"
      aria-labelledby="invite-heading"
    >
      <div className="site-container py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="invite-heading"
              className="font-display text-3xl text-white md:text-4xl lg:text-[2.65rem]"
            >
              Bring an experienced founder’s perspective to your audience
            </h2>
            <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-white/90">
              John is available for selected keynotes, fireside conversations,
              panels, university programs, and workshops on entrepreneurship,
              innovation, AI, regulation, and personal development.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn btn-on-dark">
                Invite John to Speak
              </Link>
              <a href="/cv" className="btn btn-ghost-on-dark">
                Download Speaker Information
              </a>
            </div>
            <p className="mt-6 text-sm text-white/75">
              Include your event date, location, audience, format, and preferred
              topic.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[var(--radius-card)] border border-white/15 shadow-[var(--shadow-elevated)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/john-banner.jpg"
              alt="John Chisholm engaging with an audience after a talk"
              className="aspect-[5/4] w-full object-cover object-center"
              width={900}
              height={720}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

const INSTITUTIONS = [
  'MIT',
  'University of Cambridge',
  'Harvard Kennedy School',
  'Northwood University',
  'Santa Fe Institute',
  'World Internet Conference',
]

export default function RecognitionStrip() {
  return (
    <section
      className="border-b border-divider bg-[color-mix(in_srgb,var(--color-card)_55%,var(--color-background))]"
      aria-label="Institutions where John has spoken, taught, or served"
    >
      <div className="site-container py-10 md:py-12">
        <p className="mx-auto max-w-2xl text-center text-sm text-muted md:text-[0.9375rem]">
          John has spoken, taught, and served at institutions around the world
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
          {INSTITUTIONS.map((name) => (
            <li
              key={name}
              className="font-display text-[0.95rem] tracking-[-0.01em] text-foreground/80 md:text-lg"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">
          Appearances, education, service, or advisory affiliations—not formal
          endorsements.
        </p>
      </div>
    </section>
  )
}

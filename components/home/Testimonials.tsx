const PLACEHOLDERS = [
  {
    quote: '[Verified organizer testimonial to be added.]',
    name: 'Name',
    title: 'Title',
    organization: 'Organization',
    event: 'Optional event name',
  },
  {
    quote: '[Verified organizer testimonial to be added.]',
    name: 'Name',
    title: 'Title',
    organization: 'Organization',
    event: 'Optional event name',
  },
  {
    quote: '[Verified organizer testimonial to be added.]',
    name: 'Name',
    title: 'Title',
    organization: 'Organization',
    event: 'Optional event name',
  },
]

export default function Testimonials() {
  return (
    <section
      className="border-b border-divider py-16 md:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <h2
            id="testimonials-heading"
            className="section-heading text-3xl md:text-4xl lg:text-[2.65rem]"
          >
            What organizers and audiences say
          </h2>
          <p className="lede mt-4">
            Placeholder layout only. Verified quotations will replace these
            when available—nothing invented.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {PLACEHOLDERS.map((item, index) => (
            <li key={index}>
              <figure className="card-surface flex h-full flex-col p-6 md:p-7">
                <blockquote className="flex-1 font-display text-lg leading-snug text-foreground/80">
                  <p>“{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-divider pt-4">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {item.title}, {item.organization}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.event}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

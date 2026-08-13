import { normalizeMediaPath } from '@/lib/media'

type PeoplePlace = {
  title?: string | null
  image?: string | null
  alt?: string | null
  caption?: string | null
  location?: string | null
}

export default function PeoplePlaces({ items }: { items: PeoplePlace[] }) {
  if (!items.length) return null

  return (
    <section
      id="people-places"
      className="border-b border-divider py-16 md:py-20 lg:py-24"
      aria-labelledby="people-places-heading"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <h2
            id="people-places-heading"
            className="section-heading text-3xl md:text-4xl lg:text-5xl"
          >
            People and places
          </h2>
          <p className="lede mt-4">
            A few moments from talks, workshops, and conversations across
            John’s work with universities, conferences, and public leaders.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title || item.image}>
              <figure className="card-surface h-full overflow-hidden">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={normalizeMediaPath(item.image)}
                    alt={item.alt || ''}
                    className="aspect-[4/3] w-full object-cover object-center"
                    width={520}
                    height={390}
                  />
                ) : null}
                <figcaption className="p-5">
                  {item.location ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-violet">
                      {item.location}
                    </p>
                  ) : null}
                  <h3 className="font-display mt-2 text-lg text-foreground">
                    {item.title}
                  </h3>
                  {item.caption ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.caption}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

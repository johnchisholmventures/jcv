const images = [
  {
    src: '/assets/educators/image1.jpg',
    alt: 'Entrepreneurship class using Unleash Your Inner Company',
  },
  {
    src: '/assets/educators/image2.jpg',
    alt: 'Students and educators in a classroom session',
  },
  {
    src: '/assets/educators/image3.jpg',
    alt: 'Workshop participants with Unleash Your Inner Company',
  },
]

/** Static gallery — no carousel/autoplay (design system preference). */
export default function EducatorsGallery() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <li key={image.src}>
          <figure className="overflow-hidden rounded-[var(--radius-card)] border border-divider bg-card shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] w-full object-cover"
              width={640}
              height={480}
            />
          </figure>
        </li>
      ))}
    </ul>
  )
}

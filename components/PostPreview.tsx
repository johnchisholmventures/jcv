import Link from 'next/link'
import DateFormatter from './DateFormatter'
import { italicizeWord } from '@/lib/util'

export default function PostPreview({
  title,
  date,
  excerpt,
  href,
  external,
  format,
}: {
  title?: string | null
  date?: string | null
  excerpt?: string | null
  href: string
  external?: boolean
  format?: string | null
}) {
  const short =
    excerpt &&
    `${excerpt.split(' ').slice(0, 30).join(' ')}${
      excerpt.split(' ').length > 30 ? '...' : ''
    }`

  const formatLabel =
    format === 'video'
      ? 'Video'
      : format === 'external'
        ? 'External'
        : format === 'article'
          ? 'Article'
          : format || null

  const inner = (
    <article className="card-surface h-full p-5 transition-shadow hover:shadow-[var(--shadow-elevated)] md:p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {formatLabel ? (
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-violet">
            {formatLabel}
          </span>
        ) : null}
        {date ? (
          <span className="text-xs text-muted">
            <DateFormatter dateString={date} />
          </span>
        ) : null}
      </div>
      {title ? (
        <h3 className="font-display mt-3 text-xl leading-snug text-foreground md:text-[1.35rem]">
          {italicizeWord('Unleash Your Inner Company', title)}
        </h3>
      ) : null}
      {short ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {italicizeWord('Unleash Your Inner Company', short)}
        </p>
      ) : null}
      <p className="mt-4 text-sm font-semibold text-violet">
        {external ? 'Open link →' : 'Read more →'}
      </p>
    </article>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full text-inherit no-underline"
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className="block h-full text-inherit no-underline">
      {inner}
    </Link>
  )
}

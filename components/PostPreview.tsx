import Link from 'next/link'
import DateFormatter from './DateFormatter'
import { italicizeWord } from '@/lib/util'

export default function PostPreview({
  title,
  date,
  excerpt,
  href,
  external,
}: {
  title?: string | null
  date?: string | null
  excerpt?: string | null
  href: string
  external?: boolean
}) {
  const short =
    excerpt &&
    `${excerpt.split(' ').slice(0, 30).join(' ')}${
      excerpt.split(' ').length > 30 ? '...' : ''
    }`

  const inner = (
    <div className="bg-white py-2 md:py-6 px-4 hover:bg-purple-100 rounded-lg">
      {title ? (
        <h3 className="font-bold text-xl md:text-2xl leading-snug text-default-purple">
          {italicizeWord('Unleash Your Inner Company', title)}
        </h3>
      ) : null}
      <span className="text-xs text-gray-500 italic">
        <DateFormatter dateString={date} />
      </span>
      {short ? (
        <p className="text-xs pt-1">
          {italicizeWord('Unleash Your Inner Company', short)}
        </p>
      ) : null}
    </div>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-default-grey"
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className="block text-default-grey">
      {inner}
    </Link>
  )
}

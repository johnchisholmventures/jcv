'use client'

import Link from 'next/link'
import { useState } from 'react'
import DateFormatter from './DateFormatter'
import FeaturedVideo from './FeaturedVideo'
import { italicizeWord } from '@/lib/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { isExternal, postFilename, postHref } from '@/lib/posts'

type Article = {
  title?: string | null
  date?: string | null
  excerpt?: string | null
  coverImage?: string | null
  youtubeId?: string | null
  format?: string | null
  externalUrl?: string | null
  _sys?: { filename?: string }
}

const navBtnClass =
  'disabled:opacity-75 focus:outline-none text-2xl h-8 w-8 md:text-4xl md:h-12 md:w-12 font-bold rounded-full flex items-center justify-center bg-default-purple text-white'

export default function FeaturedArticles({
  articles,
}: {
  articles: Article[]
}) {
  const [index, setIndex] = useState(0)
  if (!articles?.length) return null

  const article = articles[index]
  const href = postHref(article)
  const external = isExternal(article)

  const Title = ({ className = '' }: { className?: string }) => (
    <h3 className={`mb-8 md:mb-2 text-4xl md:text-6xl leading-tight ${className}`}>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-default-grey"
        >
          {italicizeWord('Unleash Your Inner Company', article.title)}
        </a>
      ) : (
        <Link href={href} className="font-bold text-default-grey">
          {italicizeWord('Unleash Your Inner Company', article.title)}
        </Link>
      )}
    </h3>
  )

  return (
    <section className="pb-12">
      <div className="flex flex-row justify-between items-center">
        <h2 className="section-heading">Featured</h2>
      </div>

      <Title className="md:hidden mb-4" />

      <div className="mb-8">
        {article.youtubeId ? (
          <FeaturedVideo id={article.youtubeId} />
        ) : article.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImage}
            alt={article.title || ''}
            className="w-full shadow-md"
          />
        ) : null}
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 -mt-2 pt-8">
        <div className="mb-4 md:mb-0">
          <div className="md:py-2">
            <Title className="hidden md:inline-block" />
            <span className="italic text-xl">
              <DateFormatter dateString={article.date} />
            </span>
          </div>
        </div>
        <div className="md:border-l-2 md:pl-8">
          <p className="text-xl leading-relaxed mb-4">{article.excerpt}</p>
          <div className="flex gap-4">
            <button
              type="button"
              className={navBtnClass}
              disabled={index === 0}
              aria-label="Previous featured"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              type="button"
              className={navBtnClass}
              disabled={index >= articles.length - 1}
              aria-label="Next featured"
              onClick={() =>
                setIndex((i) => Math.min(articles.length - 1, i + 1))
              }
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Featured item {index + 1} of {articles.length}:{' '}
        {postFilename(article)}
      </p>
    </section>
  )
}

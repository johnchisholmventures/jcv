'use client'

import Link from 'next/link'
import { useState } from 'react'
import DateFormatter from './DateFormatter'
import FeaturedVideo from './FeaturedVideo'
import { italicizeWord } from '@/lib/util'
import { isExternal, postHref } from '@/lib/posts'

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

  return (
    <section
      className="border-b border-divider py-16 md:py-20"
      aria-labelledby="featured-heading"
    >
      <div className="site-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="featured-heading"
              className="section-heading text-3xl md:text-4xl"
            >
              Featured
            </h2>
            <p className="lede mt-4">
              A selected talk or essay worth starting with.
            </p>
          </div>
          {articles.length > 1 ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="btn btn-secondary !min-h-11 !px-3"
                disabled={index === 0}
                aria-label="Previous featured item"
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-secondary !min-h-11 !px-3"
                disabled={index >= articles.length - 1}
                aria-label="Next featured item"
                onClick={() =>
                  setIndex((i) => Math.min(articles.length - 1, i + 1))
                }
              >
                Next
              </button>
            </div>
          ) : null}
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            {article.youtubeId ? (
              <FeaturedVideo id={article.youtubeId} />
            ) : article.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.coverImage}
                alt=""
                className="w-full rounded-[var(--radius-card)] border border-divider shadow-[var(--shadow-card)]"
                width={960}
                height={540}
              />
            ) : (
              <div className="card-surface flex aspect-video items-center justify-center text-muted">
                No media
              </div>
            )}
          </div>

          <div>
            <p className="text-sm text-muted">
              <DateFormatter dateString={article.date} />
              {articles.length > 1 ? (
                <span className="ml-2 text-muted/80">
                  · {index + 1} of {articles.length}
                </span>
              ) : null}
            </p>
            <h3 className="font-display mt-3 text-2xl leading-snug text-foreground md:text-3xl">
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit no-underline hover:text-violet"
                >
                  {italicizeWord('Unleash Your Inner Company', article.title)}
                </a>
              ) : (
                <Link
                  href={href}
                  className="text-inherit no-underline hover:text-violet"
                >
                  {italicizeWord('Unleash Your Inner Company', article.title)}
                </Link>
              )}
            </h3>
            {article.excerpt ? (
              <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
                {article.excerpt}
              </p>
            ) : null}
            <div className="mt-8">
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open resource
                </a>
              ) : (
                <Link href={href} className="btn btn-primary">
                  {article.youtubeId ? 'Watch or read' : 'Read article'}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

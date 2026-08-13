'use client'

import { useTina } from 'tinacms/dist/react'
import type { PostQuery } from '@/tina/__generated__/types'
import BackLink from '@/components/BackLink'
import FeaturedVideo from '@/components/FeaturedVideo'
import TinaContent from '@/components/TinaContent'
import DateFormatter from '@/components/DateFormatter'
import { topicLabel } from '@/lib/posts'
import Link from 'next/link'

interface ClientPageProps {
  query: string
  variables: {
    relativePath: string
  }
  data: PostQuery
}

export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const post = data.post
  const topics = (post.topics || []).filter(
    (t): t is string => typeof t === 'string' && t.length > 0
  )
  const formatLabel =
    post.format === 'video'
      ? 'Video'
      : post.format === 'external'
        ? 'External'
        : 'Article'

  return (
    <div className="border-b border-divider">
      <article className="site-container py-12 md:py-16 lg:py-20">
        <BackLink href="/talks" label="Back to talks & writing" />

        <header className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow !normal-case tracking-[0.08em]">
              {formatLabel}
            </span>
            {post.date ? (
              <span className="text-sm text-muted">
                <DateFormatter dateString={post.date} />
              </span>
            ) : null}
          </div>

          <h1 className="font-display mt-4 text-3xl text-foreground md:text-4xl lg:text-[2.65rem]">
            {post.title}
          </h1>

          {post.excerpt ? (
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {post.excerpt}
            </p>
          ) : null}

          {topics.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-divider bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted"
                >
                  {topicLabel(topic)}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <div className="mx-auto mt-10 max-w-3xl">
          {post.youtubeId ? (
            <div className="mb-10">
              <FeaturedVideo id={post.youtubeId} />
            </div>
          ) : post.coverImage ? (
            <figure className="mb-10 overflow-hidden rounded-[var(--radius-card)] border border-divider shadow-[var(--shadow-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt=""
                className="w-full object-cover"
                width={1200}
                height={675}
              />
            </figure>
          ) : null}

          <TinaContent content={post.body} />

          {post.author?.name ? (
            <footer className="mt-12 border-t border-divider pt-8">
              <div className="flex items-center gap-4">
                {post.author.picture ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.author.picture}
                    alt=""
                    className="h-14 w-14 rounded-full border border-divider object-cover"
                    width={56}
                    height={56}
                  />
                ) : null}
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {post.author.name}
                  </p>
                  <Link
                    href="/team"
                    className="text-sm font-medium text-violet no-underline hover:text-violet-dark"
                  >
                    View biography
                  </Link>
                </div>
              </div>
            </footer>
          ) : null}

          <div className="mt-12 flex flex-col gap-3 border-t border-divider pt-10 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn btn-primary">
              Contact John
            </Link>
            <Link href="/#talks" className="btn btn-secondary">
              More talks
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

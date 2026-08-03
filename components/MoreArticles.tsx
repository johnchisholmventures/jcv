'use client'

import { useMemo, useState } from 'react'
import PostPreview from './PostPreview'
import { isExternal, postFilename, postHref, topicLabel } from '@/lib/posts'
import cn from 'classnames'

type PostNode = {
  title?: string | null
  date?: string | null
  excerpt?: string | null
  format?: string | null
  externalUrl?: string | null
  topics?: (string | null)[] | null
  _sys?: { filename?: string }
}

function TopicChip({
  topic,
  active,
  onClick,
}: {
  topic: string
  active: boolean
  onClick: (t: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(topic)}
      className={cn('topic-chip', active && 'is-active')}
    >
      {topicLabel(topic)}
    </button>
  )
}

export default function MoreArticles({ posts }: { posts: PostNode[] }) {
  const [topicFilter, setTopicFilter] = useState('all')

  const topics = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => (p.topics || []).forEach((t) => t && set.add(t)))
    return ['all', ...Array.from(set).sort()]
  }, [posts])

  const filtered = useMemo(() => {
    const list =
      topicFilter === 'all'
        ? posts
        : posts.filter((p) => (p.topics || []).includes(topicFilter))
    return list
      .slice()
      .sort(
        (a, b) =>
          new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
      )
  }, [posts, topicFilter])

  return (
    <section
      id="resources"
      className="scroll-mt-24 border-b border-divider bg-[color-mix(in_srgb,var(--color-card)_40%,var(--color-background))] py-12 md:py-16"
      aria-labelledby="resources-heading"
    >
      <div className="site-container">
        <h2 id="resources-heading" className="sr-only">
          Filter and browse talks and writing
        </h2>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by topic"
        >
          {topics.map((topic) => (
            <TopicChip
              key={topic}
              topic={topic}
              active={topicFilter === topic}
              onClick={setTopicFilter}
            />
          ))}
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {!filtered.length ? (
            <li className="text-muted italic">No items for this topic.</li>
          ) : (
            filtered.map((article) => (
              <li key={postFilename(article)}>
                <PostPreview
                  title={article.title}
                  date={article.date}
                  excerpt={article.excerpt}
                  href={postHref(article)}
                  external={isExternal(article)}
                  format={article.format}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  )
}

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
      className={cn(
        'tag border-none rounded-full px-4 py-2 text-lg font-bold mr-2 mb-2',
        active && 'is-active'
      )}
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
    <section style={{ backgroundColor: '#f4f4f4' }} id="resources">
      <div className="mb-4">
        <h2 className="section-heading">Resources</h2>
        <div className="pt-2 pb-6 flex flex-wrap">
          {topics.map((topic) => (
            <TopicChip
              key={topic}
              topic={topic}
              active={topicFilter === topic}
              onClick={setTopicFilter}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-8 lg:mb-12">
        {!filtered.length ? (
          <p className="italic">No resources…</p>
        ) : (
          filtered.map((article) => (
            <PostPreview
              key={postFilename(article)}
              title={article.title}
              date={article.date}
              excerpt={article.excerpt}
              href={postHref(article)}
              external={isExternal(article)}
            />
          ))
        )}
      </div>
    </section>
  )
}

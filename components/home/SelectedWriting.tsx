import Link from 'next/link'

type WritingPost = {
  id: string
  title?: string | null
  excerpt?: string | null
  format?: string | null
  externalUrl?: string | null
  _sys?: { filename?: string | null } | null
}

type Props = {
  posts: WritingPost[]
}

export default function SelectedWriting({ posts }: Props) {
  if (!posts.length) return null

  return (
    <section
      id="resources"
      className="scroll-mt-24 border-b border-divider py-16 md:py-20"
      aria-labelledby="writing-heading"
    >
      <div className="site-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="writing-heading"
              className="section-heading text-3xl md:text-4xl"
            >
              Selected talks & writing
            </h2>
            <p className="lede mt-4">
              A short selection from recent talks and essays—not a full archive
              wall.
            </p>
          </div>
          <Link href="/talks" className="text-link shrink-0 text-sm">
            Browse all talks & writing
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => {
            const href =
              post.format === 'external' && post.externalUrl
                ? post.externalUrl
                : `/posts/${post._sys?.filename || ''}`
            const external = post.format === 'external' && !!post.externalUrl

            return (
              <li key={post.id}>
                <article className="card-surface flex h-full flex-col p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-violet">
                    {post.format || 'article'}
                  </p>
                  <h3 className="font-display mt-3 text-lg leading-snug text-foreground">
                    <a
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-inherit no-underline hover:text-violet"
                    >
                      {post.title}
                    </a>
                  </h3>
                  {post.excerpt ? (
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  ) : null}
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

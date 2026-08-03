'use client'

import { useTina } from 'tinacms/dist/react'
import type { PostQuery } from '@/tina/__generated__/types'
import Container from '@/components/Container'
import FeaturedVideo from '@/components/FeaturedVideo'
import TinaContent from '@/components/TinaContent'
import { youtubeWatchUrl } from '@/lib/posts'

interface ClientPageProps {
  query: string
  variables: {
    relativePath: string
  }
  data: PostQuery
}

export default function ClientPage(props: ClientPageProps) {
  // data passes through in production; updates live in edit mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const post = data.post
  const ogVideo = youtubeWatchUrl(post.youtubeId)

  return (
    <Container>
      <article className="mb-32">
        <div className="max-w-xl mx-auto">
          <h1 className="post-title">{post.title}</h1>
          <div className="mb-8 md:mb-16">
            {post.youtubeId ? (
              <FeaturedVideo id={post.youtubeId} />
            ) : post.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt={post.title || ''}
                className="w-full shadow-md"
              />
            ) : null}
          </div>
          <TinaContent content={post.body} />
        </div>
        {post.excerpt ? (
          <meta name="description" content={post.excerpt} />
        ) : null}
        {post.coverImage ? (
          <meta property="og:image" content={post.coverImage} />
        ) : null}
        {ogVideo ? <meta property="og:video" content={ogVideo} /> : null}
      </article>
    </Container>
  )
}

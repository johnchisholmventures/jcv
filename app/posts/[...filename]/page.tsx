import { client } from '@/tina/__generated__/client'
import ClientPage from './client-page'
import { notFound } from 'next/navigation'
import { isDraft, isExternal } from '@/lib/posts'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const pages = await client.queries.postConnection({ last: 200 })
  const paths =
    pages.data?.postConnection?.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => !!node)
      .filter((node) => !isDraft(node) && !isExternal(node))
      .map((node) => ({
        filename: node._sys.breadcrumbs,
      })) || []

  return paths
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string[] }>
}): Promise<Metadata> {
  const { filename } = await params
  const relativePath = `${filename.join('/')}.md`

  try {
    const { data } = await client.queries.post({ relativePath })
    const post = data.post
    if (!post || isDraft(post)) return { title: 'Not found' }

    const title = post.title || 'Talk or article'
    const description =
      post.excerpt ||
      'Talk or writing by John Chisholm on entrepreneurship, innovation, and related ideas.'
    const images = post.coverImage
      ? [post.coverImage]
      : post.youtubeId
        ? [`https://img.youtube.com/vi/${post.youtubeId}/hqdefault.jpg`]
        : undefined

    return {
      title,
      description,
      alternates: {
        canonical: `/posts/${filename.join('/')}`,
      },
      openGraph: {
        title,
        description,
        type: 'article',
        images,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images,
      },
    }
  } catch {
    return { title: 'Not found' }
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ filename: string[] }>
}) {
  const { filename } = await params
  const relativePath = `${filename.join('/')}.md`

  try {
    const data = await client.queries.post({ relativePath })
    if (!data.data?.post || isDraft(data.data.post)) {
      notFound()
    }
    return <ClientPage {...data} />
  } catch {
    notFound()
  }
}

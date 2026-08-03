import { client } from '@/tina/__generated__/client'
import ClientPage from './client-page'
import { notFound } from 'next/navigation'
import { isDraft, isExternal } from '@/lib/posts'

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

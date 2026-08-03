import BackLink from '@/components/BackLink'
import MoreArticles from '@/components/MoreArticles'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import { client } from '@/tina/__generated__/client'
import { isDraft, sortByDateDesc } from '@/lib/posts'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Talks & Writing',
  description:
    'Selected talks, essays, and interviews by John Chisholm on entrepreneurship, innovation, AI, regulation, and personal development.',
  alternates: { canonical: '/talks' },
}

export default async function TalksPage() {
  const { data } = await client.queries.postConnection({ last: 100 })

  const posts = (data.postConnection?.edges || [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => !!node && !isDraft(node))
    .sort(sortByDateDesc)

  return (
    <>
      <PageShell bordered={false} contentClassName="!pb-8 md:!pb-10">
        <BackLink />
        <PageHeader
          eyebrow="Talks & writing"
          title="Ideas shared with audiences and readers"
          description="Videos, essays, and interviews. Use the filters below to explore by topic."
        />
        <div className="mt-8">
          <Link href="/#talks" className="text-link text-sm">
            Watch the featured talk on the homepage
          </Link>
        </div>
      </PageShell>
      <MoreArticles posts={posts} />
    </>
  )
}

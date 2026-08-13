import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import TinaContent from '@/components/TinaContent'
import { client } from '@/tina/__generated__/client'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About John Chisholm—technology entrepreneur, author, and international speaker on entrepreneurship, innovation, and human potential.',
  alternates: { canonical: '/mission' },
}

export default async function MissionPage() {
  const { data } = await client.queries.page({ relativePath: 'mission.md' })

  return (
    <PageShell>
      <BackLink />
      <PageHeader
        eyebrow="About"
        title="Ideas grounded in building companies"
        description="John’s work encourages entrepreneurs and supports environments where innovation and human potential can flourish."
      />
      <div className="mt-10 max-w-3xl">
        <TinaContent content={data.page.body} />
      </div>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/team" className="btn btn-primary">
          Meet the team
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact John
        </Link>
      </div>
    </PageShell>
  )
}

import Container from '@/components/Container'
import TinaContent from '@/components/TinaContent'
import { client } from '@/tina/__generated__/client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission',
}

export default async function MissionPage() {
  const { data } = await client.queries.page({ relativePath: 'mission.md' })

  return (
    <Container>
      <h1 className="post-title">Our Mission</h1>
      <TinaContent content={data.page.body} />
    </Container>
  )
}

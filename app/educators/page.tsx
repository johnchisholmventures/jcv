import Container from '@/components/Container'
import TinaContent from '@/components/TinaContent'
import EducatorsSlideshow from '@/components/EducatorsSlideshow'
import { client } from '@/tina/__generated__/client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Educators',
}

export default async function EducatorsPage() {
  const { data } = await client.queries.page({
    relativePath: 'educators.md',
  })

  return (
    <Container className="py-12">
      <h1 className="post-title">
        Unleash Your Inner Company for Educators
      </h1>
      <TinaContent content={data.page.body} />
      <div className="w-full sm:max-w-4xl mx-auto mt-8">
        <EducatorsSlideshow />
      </div>
    </Container>
  )
}

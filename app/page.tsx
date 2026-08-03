import Container from '@/components/Container'
import FeaturedArticles from '@/components/FeaturedArticles'
import Hero from '@/components/Hero'
import MoreArticles from '@/components/MoreArticles'
import { client } from '@/tina/__generated__/client'
import {
  isDraft,
  sortByDateDesc,
  sortFeatured,
} from '@/lib/posts'

export default async function HomePage() {
  const { data } = await client.queries.postConnection({
    last: 100,
  })

  const posts = (data.postConnection?.edges || [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => !!node && !isDraft(node))
    .sort(sortByDateDesc)

  const featured = posts.filter((p) => p.featured).sort(sortFeatured)

  return (
    <>
      <Hero />
      <Container>
        <FeaturedArticles articles={featured} />
      </Container>
      <div style={{ backgroundColor: '#f4f4f4' }} className="py-12 -mb-12">
        <Container>
          <MoreArticles posts={posts} />
        </Container>
      </div>
    </>
  )
}

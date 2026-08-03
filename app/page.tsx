import BookFeature from '@/components/home/BookFeature'
import Experience from '@/components/home/Experience'
import FeaturedTalk from '@/components/home/FeaturedTalk'
import HomeHero from '@/components/home/HomeHero'
import RecognitionStrip from '@/components/home/RecognitionStrip'
import SelectedVentures from '@/components/home/SelectedVentures'
import SelectedWriting from '@/components/home/SelectedWriting'
import SpeakingInvite from '@/components/home/SpeakingInvite'
import SpeakingTopics from '@/components/home/SpeakingTopics'
import Testimonials from '@/components/home/Testimonials'
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
  const writingSample = (featured.length ? featured : posts).slice(0, 3)

  return (
    <>
      <HomeHero />
      <RecognitionStrip />
      <SpeakingTopics />
      <FeaturedTalk />
      <Experience />
      <SelectedVentures />
      <BookFeature />
      <Testimonials />
      <SelectedWriting posts={writingSample} />
      <SpeakingInvite />
    </>
  )
}

import BookFeature from '@/components/home/BookFeature'
import Experience from '@/components/home/Experience'
import FeaturedTalk from '@/components/home/FeaturedTalk'
import HomeHero from '@/components/home/HomeHero'
import PeoplePlaces from '@/components/home/PeoplePlaces'
import RecognitionStrip from '@/components/home/RecognitionStrip'
import SelectedVentures from '@/components/home/SelectedVentures'
import SelectedWriting from '@/components/home/SelectedWriting'
import SpeakingInvite from '@/components/home/SpeakingInvite'
import SpeakingTopics from '@/components/home/SpeakingTopics'
import { client } from '@/tina/__generated__/client'
import {
  isDraft,
  sortByDateDesc,
  sortFeatured,
} from '@/lib/posts'

export default async function HomePage() {
  const [{ data }, peoplePlacesRes] = await Promise.all([
    client.queries.postConnection({
      last: 100,
    }),
    client.queries.peoplePlaceConnection({
      last: 50,
    }),
  ])

  const posts = (data.postConnection?.edges || [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => !!node && !isDraft(node))
    .sort(sortByDateDesc)

  const featured = posts.filter((p) => p.featured).sort(sortFeatured)
  const writingSample = (featured.length ? featured : posts).slice(0, 3)
  const peoplePlaces = (peoplePlacesRes.data.peoplePlaceConnection?.edges || [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => !!node)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

  return (
    <>
      <HomeHero />
      <RecognitionStrip />
      <SpeakingTopics />
      <FeaturedTalk />
      <Experience />
      <SelectedVentures />
      <BookFeature />
      <PeoplePlaces items={peoplePlaces} />
      <SelectedWriting posts={writingSample} />
      <SpeakingInvite />
    </>
  )
}

import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import FeaturedVideo from './featured-video'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  youtubeId
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {
          !youtubeId
          ? <CoverImage title={title} src={coverImage} slug={slug} />
          : <FeaturedVideo id={youtubeId} />
        }
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8">
        <div className='border-l-8 border-default-purple hover:bg-gray-200 '>
          <div className='pl-2'> 
            <h3 className="mb-2 text-4xl lg:text-6xl leading-tight">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className='text-default-grey hover:text-default-grey'>{title}</a>
              </Link>
            </h3>
            <span className='italic'><DateFormater dateString={date} /> </span>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

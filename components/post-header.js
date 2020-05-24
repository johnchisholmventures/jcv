import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import FeaturedVideo from './featured-video'

// Not sure of when dates are for most posts so might be better to just leave them out

export default function PostHeader({ title, coverImage, date, author, youtubeId }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl">
        <div className="mb-6 italic text-md">
          {/* <DateFormater dateString={date} /> */}
        </div>
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        {
          youtubeId
          ? <FeaturedVideo id={youtubeId} />
          : (
            coverImage
            ? <CoverImage title={title} src={coverImage} />
            : null
          )
        }
      </div>
    </>
  )
}

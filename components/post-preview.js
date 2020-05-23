import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Title } from 'rbx'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className='hover:bg-gray-200'>
        <a className='text-default-grey hover:text-default'>
          <div>
            <h3 className="text-xl mb-1 leading-snug">{title}</h3>
            <h3 className='text-xs'>{excerpt.slice(0,100)}...</h3>
          </div>
        </a>
      </div>
    </Link>
  )
}

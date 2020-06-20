import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from './cover-image'
import NextLink from 'next/link'
import { Title } from 'rbx'
import { italicizeWord } from '../lib/util'

const Link = ({external = false, href, children}) => {
  console.log("EXTERNAL LINK", external)
  return (
    <>
      {
        external
        ? <a href={href}>{children}</a>
        : <NextLink href={href}>{children}</NextLink>
      }
    </>
  )
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  externalLink,
  author,
  slug,
}) {
  return (
    <Link external={externalLink ? true : false} href={externalLink ? externalLink : '/posts/[slug]'}>
      <div className='hover:bg-gray-200'>
        <a className='text-default-grey hover:text-default'>
          <div>
            <h3 className='text-xl leading-snug'>{italicizeWord('Unleash Your Inner Company',title)}</h3>
            <span className='text-xs text-gray-500 italic'><DateFormater dateString={date}/></span>
            <h3 className='text-xs pt-1'>{italicizeWord('Unleash Your Inner Company',excerpt.split(' ').slice(0,30).join(' '))}{excerpt.split(' ').length <= 30 ? '' : '...'}</h3>
          </div>
        </a>
      </div>
    </Link>
  )
}

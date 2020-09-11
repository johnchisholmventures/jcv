import DateFormater from '../components/date-formater'
import NextLink from 'next/link'
import { italicizeWord } from '../lib/util'

const Link = ({external = false, href, children}) => {
  return (
    <>
      {
        external
        ? <a target='external' className='text-default-grey hover:text-default' href={href}>{children}</a>
        : <NextLink href={href}><a className='text-default-grey hover:text-default'>{children}</a></NextLink>
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
      <Link external={externalLink ? true : false} href={externalLink ? externalLink : `/posts/${slug}`}>
        <div className='bg-white py-2 md:py-6 px-4 hover:bg-purple-100 rounded-lg'>
            <div>
              {
                title
                ? <h3 className='font-bold text-xl md:text-2xl leading-snug text-default-purple'>{italicizeWord('Unleash Your Inner Company',title)}</h3>
                : null
              }
              <span className='text-xs text-gray-500 italic'><DateFormater dateString={date}/></span>
              {
                excerpt
                ? <h3 className='text-xs pt-1'>{italicizeWord('Unleash Your Inner Company',excerpt.split(' ').slice(0,30).join(' '))}{excerpt.split(' ').length <= 30 ? '' : '...'}</h3>
                : null
              }
            </div>
        </div>
      </Link>  
  )
}

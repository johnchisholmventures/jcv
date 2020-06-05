import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import FeaturedVideo from './featured-video'
import {Button} from 'rbx'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import {italicizeWord} from '../lib/util'

const ArticlePreview = ({article}) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    youtubeId
  } = article
  return (
    <>
      <div className='mb-8'>
        {
          !youtubeId
          ? <CoverImage title={title} src={coverImage} slug={slug} />
          : <FeaturedVideo id={youtubeId} />
        }
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 -mt-2">
        <div className='border-l-8 border-default-purple hover:bg-gray-200 mt-2'>
          <div className='pl-2'> 
            <h3 className="mb-2 text-4xl lg:text-4xl leading-tight">
              <Link href={`/posts/${slug}`}>
                <a className='text-default-grey hover:text-default-grey'>{italicizeWord('Unleash Your Inner Company', title)}</a>
              </Link>
            </h3>
            <span className='italic'><DateFormater dateString={date} /> </span>
          </div>
        </div>
        <div className='mt-2'>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </>
  )
}



export default function HeroPost({articles}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={200}
          totalSlides={articles.length}
        >
          <div className='flex flex-row justify-between'>
            <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tighter leading-tight">
              Featured
            </h2>
            <Button.Group>
              {/* Bit of a hack here. Manually using RBX classes for Carousel buttons */}
              <ButtonBack className='button is-default-purple is-small'>Previous</ButtonBack>
              <ButtonNext className='button is-default-purple is-small'>Next</ButtonNext>
            </Button.Group>
            {/* <Button.Group size='small'>
              >
              <span className='w-2'></span>
              <Button color='default-purple'></Button>
            </Button.Group> */}
          </div>
          <Slider>
            {
              articles.map((article, index) => (
                <Slide key={index}>
                  <ArticlePreview article={article} />
                </Slide>
              ))
            }
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  )
}

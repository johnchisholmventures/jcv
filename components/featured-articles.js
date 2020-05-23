import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import FeaturedVideo from './featured-video'
import {Button} from 'rbx'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

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
    </>
  )
}



export default function HeroPost({articles}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={articles.length}
        >
          <div className='flex flex-row justify-between'>
            <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tighter leading-tight">
              Featured Articles
            </h2>
            <Button.Group size='small'>
              <ButtonBack><Button color='default-purple'>Previous</Button></ButtonBack>
              <span className='w-2'></span>
              <ButtonNext><Button color='default-purple'>Next</Button></ButtonNext>
            </Button.Group>
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

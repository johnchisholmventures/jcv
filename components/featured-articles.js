import React from 'react'
import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import FeaturedVideo from './featured-video'
import {Button} from 'rbx'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, WithStore } from 'pure-react-carousel'
import {italicizeWord} from '../lib/util'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

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
    <div className='h-8'>
      <div className='mb-8'>
        {
          !youtubeId
          ? <CoverImage title={title} src={coverImage} slug={slug} />
          : <FeaturedVideo id={youtubeId} />
        }
      </div>
    </div>
  )
}

class _HeroDescription extends React.Component {
  render() {
    const {articles, currentSlide, buttons, children} = this.props
    const {slug, date, title, excerpt} = articles[currentSlide]

    const HeroTitle = ({className}) => (
      <h3 className={cn(className, 'mb-8 md:mb-2 text-4xl md:text-6xl leading-tight')}>
        <Link href={`/posts/${slug}`}>
          <a className='font-bold text-default-grey hover:text-default-grey'>{italicizeWord('Unleash Your Inner Company', title)}</a>
        </Link>
      </h3>
    )
    return (
      <>
      <HeroTitle className='md:hidden mb-4 sm:'/>
      {
        children
      }
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 -mt-2 pt-8">
        <div className='hover:bg-gray-200 mb-4 md:mb-0'>
        <div className={'md:py-2'}> 
          <HeroTitle className='hidden md:inline-block'/>
          <span className='italic text-xl'><DateFormater dateString={date} /></span>
        </div>
        </div>
        <div className='md:border-l-2 md:pl-8'>
          <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
          {
            buttons
          }
        </div>
      </div>
      </>


    )
  }
}

const HeroDescription = WithStore(_HeroDescription, state => ({currentSlide: state.currentSlide}))


export default function HeroPost({articles}) {
  return (
    <section className='pb-12'>
      {/* <div className="mb-8 md:mb-16"> */}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={articles.length}
        >
          <div className='flex flex-row justify-between items-center'>
            <h2 className="section-heading">
              Featured
            </h2>
          </div>
          <HeroDescription buttons={
              <Button.Group>
              {/* Bit of a hack here. Manually using RBX class "button" for Carousel buttons */}
              <ButtonBack className='disabled:opacity-75 focus:outline-none text-2xl h-8 w-8 md:text-4xl md:h-12 md:w-12 font-bold rounded-full flex items-center justify-center bg-default-purple text-white mr-4'>
                <Icon>
                  <FontAwesomeIcon icon={faArrowLeft}/>
                </Icon>     
              </ButtonBack>
              <ButtonNext className='disabled:opacity-75 focus:outline-none text-2xl h-8 w-8 md:text-4xl md:h-12 md:w-12 font-bold rounded-full flex items-center justify-center bg-default-purple text-white'>
                <Icon>
                  <FontAwesomeIcon icon={faArrowRight}/>
                </Icon>
              </ButtonNext>
            </Button.Group>
          } articles={articles}>
            <Slider>
              {
                articles.map((article, index) => (
                  <Slide key={index}>
                    <ArticlePreview article={article} />
                  </Slide>
                ))
              }
            </Slider>            
          </HeroDescription>
        </CarouselProvider>
    </section>
  )
}

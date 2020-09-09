import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import {getPageContent} from '../lib/api'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import components from '../components/mdx'
import PostBody from '../components/post-body'
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext, WithStore } from 'pure-react-carousel'

const images = [
  'assets/educators/image1.jpg',
  'assets/educators/image2.jpg',
  'assets/educators/image3.jpg'
]

const Slideshow = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={60}
      totalSlides={images.length}
      interval={3000}
      isPlaying={true}
    >
      <Slider>
        {
          images.map((image, index) => (
            <Slide key={index}>
              <Image src={image}/>
            </Slide>
          ))
        }
      </Slider>
    </CarouselProvider>
  )
}

const Educators = ({page}) => {
  const content = hydrate(page.mdxSource, {components})
  return (
    <>
      <Layout>
        <Head>
          <title>For Educators</title>
        </Head>
        <Container className='py-12'>
            <PostTitle>Unleash Your Inner Company for Educators</PostTitle>
            <PostBody content={content}/>
            <div className='w-full sm:max-w-4xl mx-auto'>
              <Slideshow />
            </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await Promise.all(getPageContent('educators', ['content'])
    .map(async page => ({...page, mdxSource: await renderToString(page.content, {components})})))
  return {
    props: {
      page: page[0]
    },
  }
}

export default Educators
import Container from '../components/container'
import MoreArticles from '../components/more-articles'
import FeaturedArticles from '../components/featured-articles'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Header from '../components/header'
import { Column } from 'rbx'



export default function Index({ allPosts }) {
  const featuredArticles = allPosts.filter(article => article.featured ).sort((a,b) => a.featured - b.featured )
  return (
    <>
      <Layout>
        <Head bgImage='/assets/banner.jpg'>
          <title>JCV</title>
        </Head>
        <Container>
          <div className='hero-image mb-12 hidden sm:block md:h-48 lg:h-hero-lg bg-right-top'>
            <div className='hero-text hidden md:block md:text-xl lg:text-3xl'>
              <h1>Our mission today and for the past ten years has been to help experienced and aspiring entrepreneurs alike achieve the freedom, independence, and ability to do what they love, and make the world a better place, through successful entrepreneurship.</h1>
            </div>
          </div>
          <FeaturedArticles articles={featuredArticles} />
          {allPosts.length > 0 && <MoreArticles posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'youtubeId',
    'featured',
    'type',
    'tags',
    'externalLink'
  ])

  return {
    props: { allPosts },
  }
}

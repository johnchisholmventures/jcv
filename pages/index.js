import Container from '../components/container'
import MoreArticles from '../components/more-articles'
import FeaturedArticles from '../components/featured-articles'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Header from '../components/header'

export default function Index({ allPosts }) {
  const featuredArticles = allPosts.filter(article => article.featured ).sort((a,b) => a.featured - b.featured )
  return (
    <>
      <Layout>
        <Head bgImage='/assets/banner.jpg'>
          <title>JCV</title>
        </Head>
        <Hero />
        <Container>
          <FeaturedArticles articles={featuredArticles} />
        </Container>
        <div style={{backgroundColor: '#f4f4f4'}} className='py-12 -mb-12'>
          <Container>
            {allPosts.length > 0 && <MoreArticles posts={allPosts} />}
          </Container>
        </div>
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

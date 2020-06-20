import Container from '../components/container'
import MoreArticles from '../components/more-articles'
import FeaturedArticles from '../components/featured-articles'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { Column } from 'rbx'

export default function Index({ allPosts }) {
  const featuredArticles = allPosts.filter(article => article.featured ).sort((a,b) => a.featured - b.featured )
  return (
    <>
      <Layout>
        <Head>
          <title>JCV</title>
        </Head>
        <Container>
          <Column.Group>
            <Column>
              <FeaturedArticles articles={featuredArticles} />
            </Column>
            <Column className='order-first' size='one-third'>
              {allPosts.length > 0 && <MoreArticles posts={allPosts} />}
            </Column>
          </Column.Group>
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

import Container from '../components/container'
import MoreArticles from '../components/more-articles'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { Column } from 'rbx'

export default function Index({ allPosts }) {
  const heroPost = allPosts.find(post => post.slug === 'how-will-ai-affect-innovation-ecosystems') || allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>JCV</title>
        </Head>
        <Container>
          <Column.Group>
            <Column>
              {heroPost && (
                <HeroPost
                  title={heroPost.title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  author={heroPost.author}
                  slug={heroPost.slug}
                  excerpt={heroPost.excerpt}
                  youtubeId={heroPost.youtubeId}
                />
              )}
            </Column>
            <Column className='order-first' size='one-third'>
              {morePosts.length > 0 && <MoreArticles posts={morePosts} />}
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
    'tags'
  ])

  return {
    props: { allPosts },
  }
}

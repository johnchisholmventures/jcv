import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import {getPageContent} from '../lib/api'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import mdxComponents from '../components/mdx'
import PostBody from '../components/post-body'

const Mission = ({page}) => {
  const content = hydrate(page.mdxSource, mdxComponents)
  return (
    <>
      <Layout>
        <Head>
          <title>Mission</title>
        </Head>
        <Container>
            <PostTitle>Our Mission</PostTitle>
            <PostBody content={content} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await Promise.all(getPageContent('mission', ['content'])
    .map(async page => ({
      ...page,
       mdxSource: await renderToString(page.content, mdxComponents)
    })))
  return {
    props: {
      page: page[0]
    },
  }
}

export default Mission
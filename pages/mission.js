import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import {getPageContent} from '../lib/api'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import components from '../components/mdx'
import PostBody from '../components/post-body'

const Mission = ({source}) => {
  console.log("MDX SOURCE");
  const content = hydrate(source, {components})
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
  const page = await getPageContent('mission', ['content'])

  return {
    props: {
      source: await renderToString(page[0].content, {components})
    },
  }
}

export default Mission
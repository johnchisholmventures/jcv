import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import {getPageContent} from '../lib/api'
import cn from 'classnames'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import mdxComponents from '../components/mdx'
import PostBody from '../components/post-body'

const Investments = ({page}) => {
  const content = hydrate(page.mdxSource, mdxComponents)
  return (
    <>
      <Layout>
        <Head>
          <title>For Educators</title>
        </Head>
        <Container>
            <PostTitle>Unleash Your Inner Company for Educators</PostTitle>
            <PostBody content={content}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await Promise.all(getPageContent('educators', ['content'])
    .map(async page => ({...page, mdxSource: await renderToString(page.content, mdxComponents)})))
  return {
    props: {
      page: page[0]
    },
  }
}

export default Investments
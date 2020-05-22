import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import {getPageContent} from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import RenderHtml from '../components/render-html'

const Mission = ({page}) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Mission</title>
        </Head>
        <Container>
            <PostTitle>Our Mission</PostTitle>
            <RenderHtml>{page.content}</RenderHtml>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await Promise.all(getPageContent('mission', ['content'])
    .map(async page => ({...page, content: await markdownToHtml(page.content)})))
  return {
    props: {
      page: page[0]
    },
  }
}

export default Mission
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'

const UYIC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Unleash Your Inner Company</title>
        </Head>
        <Container>
            <PostTitle>Unleash Your Inner Company</PostTitle>
        </Container>
      </Layout>
    </>
  )
}
export default UYIC
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'
import {getPageContent} from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import RenderHtml from '../components/render-html'
import cn from 'classnames'

const withLink = (component, target) => (
  <a href={target}>
    {component}
  </a>
)

const Investment = ({picture, name, site}) => {

  const content = (
    <>
      <img className='w-64 mx-auto' src={picture} />
      <p className='text-default-grey text-lg'>{name}</p>
    </>
  )

  return (
    <div className={cn({'hover:bg-gray-200':site}, 'w-full sm:w-1/2 md:w-1/3 relative p-4 box-border text-center self-center')}>
      <div className='flex-1 text-default-grey'>
        {
          site
          ? withLink(content, site)
          : content
        }
      </div>
    </div>
  )
}

const Investments = ({page}) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Investments</title>
        </Head>
        <Container>
            <PostTitle>Our Investments</PostTitle>
            <RenderHtml>{page.content}</RenderHtml>
            <div className='flex flex-row flex-wrap justify-start'>
              <Investment picture='/assets/investments/cast_app.png' name='Cast.app' site='https://cast.app/'/>
              <Investment picture='/assets/investments/hifive.png' name='Formerly Parley Labs' site='http://highfive.com/'/>
              <Investment picture='/assets/investments/customersat.png' name='Now part of ConfirmIt'/>
              <Investment picture='/assets/investments/decisive_technology.png' name='Now part of Google'/>
              <Investment picture='/assets/investments/pyze.png' name='Pyze Inc.' site='http://www.pyze.com/'/>
              <Investment picture='/assets/investments/qnect.jpg' name='Qnect' site='http://www.qnect.com/'/>
            </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await Promise.all(getPageContent('investments', ['content'])
    .map(async page => ({...page, content: await markdownToHtml(page.content)})))
  return {
    props: {
      page: page[0]
    },
  }
}

export default Investments
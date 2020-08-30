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

const withLink = (component, target) => <a href={target}>{component}</a>

const Investment = ({picture, name, site, description}) => {
  const content = (
    <div className='w-64 mx-auto'>
      <img className='h-12 mx-auto' src={picture} />
      <p className='text-default-grey text-lg'>{name}</p>
      { description && <p className='text-default-grey italic text-xs'>{description}</p>}
    </div>
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
  const content = hydrate(page.mdxSource, mdxComponents)
  return (
    <>
      <Layout>
        <Head>
          <title>Investments</title>
        </Head>
        <Container>
            <PostTitle>Our Investments</PostTitle>
            <PostBody content={content}/>
            <div className='flex flex-row flex-wrap justify-start'>
              <Investment picture='/assets/investments/cast_app.png' name='Cast.app' site='https://cast.app/' description='Reports you can read, listen to, or watch'/>
              <Investment picture='/assets/investments/hifive.png' name='Formerly Parley Labs' site='http://highfive.com/' description='Turn any room into a high-res video conferencing center'/>
              <Investment picture='/assets/investments/customersat.png' name='Now part of ConfirmIt' description='Leader in Enterprise Feedback Management'/>
              <Investment picture='/assets/investments/decisive_technology.png' name='Now part of Google' description='Pioneer in Online Surveys'/>
              <Investment picture='/assets/investments/pyze.png' name='Pyze Inc.' site='http://www.pyze.com/' description='The Application Success Platform'/>
              <Investment picture='/assets/investments/qnect.jpg' name='Qnect' site='http://www.qnect.com/' description='Disrupting steel structure construction with fast 3D model connections'/>
            </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await Promise.all(getPageContent('investments', ['content'])
    .map(async page => ({...page, mdxSource: await renderToString(page.content, mdxComponents)})))
  return {
    props: {
      page: page[0]
    },
  }
}

export default Investments
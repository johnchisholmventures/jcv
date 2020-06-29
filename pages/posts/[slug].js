import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import FeaturedVideo from '../../components/featured-video'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import mdxComponents from '../../components/mdx'

export default function Post({ post, morePosts}) {
  const content = hydrate(post.mdxSource, mdxComponents)

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  JCV | {post.title}
                </title>
                {
                  post.ogImage && post.ogImage.url && <meta property="og:image" content={post.ogImage.url} />
                }
                {
                  post.ogVideo && post.ogVideo.url && <meta property="og:video" content={post.ogVideo.url} />
                }
              </Head>
              <div className="max-w-xl mx-auto">
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  youtubeId={post.youtubeId}
                />
                <PostBody content={content} />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'type',
    'youtubeId'
  ])
  const mdxSource = await renderToString(post.content || '', mdxComponents)

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

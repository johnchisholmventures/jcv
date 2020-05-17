import PostPreview from './post-preview'
import { Button } from 'rbx'

const tags = ['📺 video','technology', 'economics', 'investing']

const ArticleTag = ({tag}) => (
<Button onClick={() => console.log(tag)} color='primary'>{tag}</Button>
)

export default function MoreArticles({ posts }) {
  return (
    <section>
      <div className='mb-4'>
        <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tighter leading-tight">
          More Articles
        </h2>
        <div className='py-4'>
          <Button.Group size='small'>
          {
            tags.map(tag => <ArticleTag tag={tag} />)
          }
          </Button.Group>
        </div>
      </div>
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-8 mb-32">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

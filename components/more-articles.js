import PostPreview from './post-preview'
import { Button } from 'rbx'
import { useState } from 'react'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'


const ArticleTag = ({tag, update}) => {
  return (
    <Button onClick={() => update(tag)} color='default-purple'>
      {
        !(tag === 'video')
        ? null
        : (
          <Icon>
            <FontAwesomeIcon icon={faYoutube} />
          </Icon>
        )
      }
      <span>{tag}</span>
    </Button>
  )
}

const postsToDir = posts => {
  return posts.reduce((acc, post) => {
    acc[post.slug] = post
    return acc
  },{})
}

const postsToTagsDir = posts => {
  return posts.reduce((acc, post) => {
    if(!post.tags) return acc
    // create an all articles tag
    if(!acc['all articles']) acc['all articles'] = posts.map(post => post.slug)
    post.tags.forEach(tag => {
      !acc[tag]
      ? acc[tag] = [post.slug]
      : acc[tag] = [...acc[tag], post.slug]
    })
    return acc
  },{})
}

export default function MoreArticles({ posts }) {
  const [activeArticles, _updateActiveArticles] = useState(posts)

  const postsDir = postsToDir(posts)
  const tagsDir = postsToTagsDir(posts)

  const updateActiveArticles = tag => {
    const activeArticleSlugs = tagsDir[tag] || []
    const activeArticles = activeArticleSlugs.map(slug => postsDir[slug])
    return activeArticles.length > 0
    ? _updateActiveArticles(activeArticles)
    : _updateActiveArticles([])
  }
  return (
    <section>
      <div className='mb-4'>
        <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tighter leading-tight">
          More Articles
        </h2>
        <div className='py-4'>
          <Button.Group size='small'>
          {
            Object.keys(tagsDir).map(tag => <ArticleTag key={tag} tag={tag} update={updateActiveArticles}/>)
          }
          </Button.Group>
        </div>
      </div>
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-8 mb-32">
        {activeArticles.map( article => (
          <PostPreview
            key={article.slug}
            title={article.title}
            coverImage={article.coverImage}
            date={article.date}
            author={article.author}
            slug={article.slug}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

{/* <PostPreview
key={post.slug}
title={post.title}
coverImage={post.coverImage}
date={post.date}
author={post.author}
slug={post.slug}
excerpt={post.excerpt}
/> */}
import PostPreview from './post-preview'
import { Button } from 'rbx'
import { useState } from 'react'
import { Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { capitalizeFirst } from '../lib/util'

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
      <span>{capitalizeFirst(tag)}</span>
    </Button>
  )
}

// this takes the array of posts and makes them
// into an object where they're addressable by slug
const postsToDir = posts => {
  return posts.reduce((acc, post) => {
    acc[post.slug] = post
    return acc
  },{})
}

// this takes the array of posts and sorts them by slug
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

const postsToTypeDir = posts => {
  return posts.reduce((acc, post) => {
    if(!post.type) return acc
    // create an all articles tag
    const type = post.type
    !acc[type]
    ? acc[type] = [post.slug]
    : acc[type] = [...acc[type], post.slug]
    return acc
  },{})
}

export default function MoreArticles({ posts }) {
  const [activeArticles, _updateActiveArticles] = useState(posts)

  const postsDir = postsToDir(posts)
  const tagsDir = postsToTagsDir(posts)
  const typesDir = postsToTypeDir(posts)
  
  const updateActiveArticles = activeDir => tag => {
      const activeArticleSlugs = activeDir[tag] || []
      
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
        <h1 className='text-xs italic'>By type</h1>
        <div>
          <Button.Group className='py-2 pb-4' size='small'>
            {
              Object.keys(typesDir).map(tag => <ArticleTag key={tag} tag={tag} update={updateActiveArticles(typesDir)}/>)
            }
          </Button.Group>
        </div>
        <h1 className='text-xs italic'>By subject</h1>
        <div>
          <Button.Group className='py-2' size='small'>
            {
              Object.keys(tagsDir).map(tag => <ArticleTag key={tag} tag={tag} update={updateActiveArticles(tagsDir)}/>)
            }
          </Button.Group>
        </div>
      </div>
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-8 mb-32">
        {
          activeArticles && activeArticles.length <= 0
          ? null
          : (activeArticles.map( article => (
            <PostPreview
              key={article.slug}
              title={article.title}
              coverImage={article.coverImage}
              date={article.date}
              author={article.author}
              slug={article.slug}
              excerpt={article.excerpt}
            />
          )))
        }
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
import PostPreview from './post-preview'
import { Button } from 'rbx'
import { useState, useEffect } from 'react'
import { capitalizeFirst } from '../lib/util'
import _intersection from 'lodash.intersection'

const ArticleTag = ({tag, update, activeTag}) => {
  return (
    <Button state={activeTag === tag ? 'active' : ''} onClick={() => update(tag)} >
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
    if(!acc['all']) acc['all'] = posts.map(post => post.slug)
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
    if(!acc['all']) acc['all'] = posts.map(post => post.slug)
    !acc[type]
    ? acc[type] = [post.slug]
    : acc[type] = [...acc[type], post.slug]
    return acc
  },{})
}

export default function MoreArticles({ posts }) {
  const [typeFilter, updateTypeFilter] = useState('all')
  const [tagFilter, updateTagFilter] = useState('all')

  // Build reference-able directories
  const postsDir = postsToDir(posts)
  const tagsDir = postsToTagsDir(posts)
  const typesDir = postsToTypeDir(posts)

  const filteredItems = () => {
    const typeSlugs = typesDir[typeFilter]
    const tagSlugs = tagsDir[tagFilter]
    const activeSlugs = _intersection(typeSlugs, tagSlugs)
    return activeSlugs.map(slug => postsDir[slug])
  }


  // const initialValue = applyFilters({tag:tagFilter, type:typeFilter})
  // const [activeItems, updateActiveItems] = useState(initialValue)

  // useEffect(() => {
  //   console.log("ACTIVE ITEMS", activeItems)
  //   const activeItems = applyFilters({type:typeFilter, tag:tagFilter})
  //   updateActiveItems(activeItems)
  // },[typeFilter, tagFilter])

  return (
    <section id='resources'>
      <div className='mb-4'>
        <h2 className="mb-2 section-heading tracking-tighter leading-tight">
          Resources
        </h2>
        <h1 className='text-xs italic'>By type</h1>
        <div>
          <Button.Group className='py-2 pb-4' size='small'>
            {
              Object.keys(typesDir).map(tag => <ArticleTag activeTag={typeFilter} key={tag} tag={tag} update={updateTypeFilter}/>)
            }
          </Button.Group>
        </div>
        <h1 className='text-xs italic'>By subject</h1>
        <div>
          <Button.Group className='py-2' size='small'>
            {
              Object.keys(tagsDir).map(tag => <ArticleTag activeTag={tagFilter} key={tag} tag={tag} update={updateTagFilter}/>)
            }
          </Button.Group>
        </div>
      </div>
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-8 mb-32">
        {
          !(filteredItems && filteredItems().length)
          ? <h1 className='italic'>No resources...</h1>
          : (
            filteredItems().slice().sort((a, b) => new Date(b.date) - new Date(a.date)).map( article => (
              <PostPreview
                key={article.slug}
                title={article.title}
                coverImage={article.coverImage}
                date={article.date}
                author={article.author}
                slug={article.slug}
                excerpt={article.excerpt}
                externalLink={article.externalLink}
              />)
            )
          )
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
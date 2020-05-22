import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const pagesDirectory = join(process.cwd(), '_pages')

const getSlugs = directory => fs.readdirSync(directory)

export const getPostSlugs = () => getSlugs(postsDirectory)

const getFileBySlug = (slug, directory, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export const getPostBySlug = (slug, fields = []) => getFileBySlug(slug, postsDirectory, fields)
const getTeamBySlug = (slug, fields = []) => getFileBySlug(slug, `${pagesDirectory}/team`, fields)

// export function getPostBySlug(slug, fields = []) {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = join(postsDirectory, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)

//   const items = {}

//   // Ensure only the minimal needed data is exposed
//   fields.forEach(field => {
//     if (field === 'slug') {
//       items[field] = realSlug
//     }
//     if (field === 'content') {
//       items[field] = content
//     }

//     if (data[field]) {
//       items[field] = data[field]
//     }
//   })
//   return items
// }

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  return slugs.map(slug => getFileBySlug(slug, postsDirectory, fields))
}

export const getPageContent = (page, fields = []) => {
  const directory = `${pagesDirectory}/${page}`
  const slugs = getSlugs(directory)
  return slugs.map(slug => getFileBySlug(slug, directory, fields))
}

export const johnFirst = persons => {
  var first = "john-chisholm"
  return persons.sort(function(x,y){ return x.slug == first ? -1 : y.slug == first ? 1 : 0; })
}

export const getTeamMembers = (fields = ['name', 'picture', 'twitter','linkedIn', 'content', 'slug']) => {
  const slugs = getSlugs(`${pagesDirectory}/team`)
  const persons = slugs.map(slug => getTeamBySlug(slug, fields))
}
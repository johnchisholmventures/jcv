import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const teamDirectory = join(process.cwd(), '_team')

export const getPostSlugs = () => fs.readdirSync(postsDirectory)

const getTeamSlugs = () => fs.readdirSync(teamDirectory)

const getFileBySlug = (slug, directory, fields = []) => {
  console.log("FIELDS", fields)
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
const getTeamBySlug = (slug, fields = []) => getFileBySlug(slug, teamDirectory, fields)

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

export const getTeamMembers = (fields = ['name', 'picture', 'twitter','linkedIn', 'content', 'slug']) => {
  const slugs = getTeamSlugs()
  const persons = slugs.map(slug => getTeamBySlug(slug, fields))
  // make sure john's name shows up first
  var first = "john-chisholm";
  return persons.sort(function(x,y){ return x.slug == first ? -1 : y.slug == first ? 1 : 0; });
}
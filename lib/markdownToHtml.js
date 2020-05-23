import remark from 'remark'
import html from 'remark-html'
import images from 'remark-embed-images'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(images)
    .process(markdown)
  return result.toString()
}

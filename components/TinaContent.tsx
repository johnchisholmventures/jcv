import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text'

export default function TinaContent({
  content,
}: {
  content: TinaMarkdownContent | null | undefined
}) {
  if (!content) return null
  return (
    <div className="markdown">
      <TinaMarkdown content={content} />
    </div>
  )
}

import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { normalizeMediaPath } from '@/lib/media'

type TinaImageProps =
  | {
      url: string
      caption?: string
      alt?: string
    }
  | undefined

export default function TinaContent({
  content,
}: {
  content: TinaMarkdownContent | null | undefined
}) {
  if (!content) return null
  return (
    <div className="markdown">
      <TinaMarkdown
        content={content}
        components={{
          img: (props: TinaImageProps) => {
            const src = normalizeMediaPath(props?.url)
            if (!src) return <></>

            return (
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={props?.alt || ''} />
                {props?.caption ? (
                  <figcaption>{props.caption}</figcaption>
                ) : null}
              </figure>
            )
          },
        }}
      />
    </div>
  )
}

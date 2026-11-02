/**
 * TinaCloud rewrites image fields to CDN/proxy URLs that 404 for git-backed
 * files under public/. Map those back to site paths so the same content works
 * on the preview branch and after cutover to master.
 *
 * Examples:
 * - /assets/blog/covers/loyalty.jpg → unchanged
 * - https://assets.tina.io/<id>/__staging/<branch>/__file/assets/blog/covers/loyalty.jpg
 *   → /assets/blog/covers/loyalty.jpg
 * - https://assets.tina.io/<id>/__file/assets/blog/authors/chisholm.jpg
 *   → /assets/blog/authors/chisholm.jpg
 * - https://example.com/photo.jpg → unchanged
 */
export function normalizeMediaPath(path: string | null | undefined) {
  if (!path) return undefined

  const trimmed = path.trim()
  if (!trimmed) return undefined

  const filePath = trimmed.match(/\/__file\/(.+?)(?:\?|#|$)/)?.[1]
  if (filePath) {
    return publicPath(decodeURIComponent(filePath))
  }

  const tinaHostMatch = trimmed.match(
    /^(?:https?:)?\/\/assets\.tina\.io\/[^/]+\/(.+?)(?:\?|#|$)/i
  )
  if (tinaHostMatch?.[1]) {
    const rest = tinaHostMatch[1].replace(/^__staging\/[^/]+\//, '')
    if (rest) return publicPath(decodeURIComponent(rest))
  }

  if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith('data:')) {
    return trimmed
  }

  return publicPath(trimmed)
}

function publicPath(path: string) {
  const withoutLeadingSlash = path.replace(/^\/+/, '')
  const withoutPublic = withoutLeadingSlash.startsWith('public/')
    ? withoutLeadingSlash.slice('public/'.length)
    : withoutLeadingSlash

  return `/${withoutPublic}`
}

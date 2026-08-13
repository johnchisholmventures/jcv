export function normalizeMediaPath(path: string | null | undefined) {
  if (!path) return undefined

  const trimmed = path.trim()
  if (!trimmed) return undefined

  const tinaFilePath = trimmed.match(/\/__file\/(.+)$/)?.[1]
  if (tinaFilePath) {
    return publicPath(tinaFilePath)
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

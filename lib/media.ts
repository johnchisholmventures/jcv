export function normalizeMediaPath(path: string | null | undefined) {
  if (!path) return undefined

  const trimmed = path.trim()
  if (!trimmed) return undefined
  if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith('data:')) {
    return trimmed
  }

  const withoutLeadingSlash = trimmed.replace(/^\/+/, '')
  const withoutPublic = withoutLeadingSlash.startsWith('public/')
    ? withoutLeadingSlash.slice('public/'.length)
    : withoutLeadingSlash

  return `/${withoutPublic}`
}

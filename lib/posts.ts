export const TOPIC_LABELS: Record<string, string> = {
  all: 'All',
  entrepreneurship: 'Entrepreneurship',
  regulation: 'Regulation',
  governance: 'Governance',
  economics: 'Economics',
  innovation: 'Innovation',
  education: 'Education',
  interview: 'Interview',
  ai: 'AI',
  'personal-development': 'Personal development',
}

export function topicLabel(topic: string) {
  return TOPIC_LABELS[topic] || topic
}

export function postFilename(post: { _sys?: { filename?: string } }) {
  return post?._sys?.filename || ''
}

export function isDraft(post: { draft?: boolean | null }) {
  return !!post?.draft
}

export function isExternal(post: {
  format?: string | null
  externalUrl?: string | null
}) {
  return post?.format === 'external' && !!post?.externalUrl
}

export function postHref(post: {
  format?: string | null
  externalUrl?: string | null
  _sys?: { filename?: string }
}) {
  if (isExternal(post)) return post.externalUrl as string
  return `/posts/${postFilename(post)}`
}

export function sortByDateDesc<T extends { date?: string | null }>(a: T, b: T) {
  return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
}

export function sortFeatured<
  T extends { featuredOrder?: number | null; date?: string | null },
>(a: T, b: T) {
  const ao = a.featuredOrder ?? 999
  const bo = b.featuredOrder ?? 999
  if (ao !== bo) return ao - bo
  return sortByDateDesc(a, b)
}

export function youtubeWatchUrl(youtubeId?: string | null) {
  if (!youtubeId) return null
  return `https://www.youtube.com/watch?v=${youtubeId}`
}

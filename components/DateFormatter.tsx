import { parseISO, format } from 'date-fns'

export default function DateFormatter({
  dateString,
}: {
  dateString?: string | null
}) {
  if (!dateString) return null
  try {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  } catch {
    return <time dateTime={dateString}>{dateString}</time>
  }
}

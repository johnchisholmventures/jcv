import type { ReactNode } from 'react'

/** Wrap occurrences of a phrase in italics */
export function italicizeWord(
  word: string,
  text?: string | null
): ReactNode {
  if (!text) return null
  const index = text.indexOf(word)
  if (index < 0) return text
  return (
    <>
      {text.slice(0, index)}
      <span className="italic">{word}</span>
      {text.slice(index + word.length)}
    </>
  )
}

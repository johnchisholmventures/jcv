'use client'

import Link from 'next/link'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

type Talk = {
  youtubeId: string
  title: string
  event: string
  year?: string
  runtime?: string
  description?: string
  href: string
}

const FEATURED: Talk = {
  youtubeId: '1fxw9nTecIs',
  title:
    'How to Regulate AI—and Other Technologies That Pose Unknowable Risks',
  event: 'Northwood University',
  year: '2025',
  runtime: 'Talk',
  description:
    'John examines why conventional regulation struggles with rapidly evolving technology and proposes a more adaptive approach to managing uncertainty.',
  href: '/posts/how-to-regulate-ai',
}

const RELATED: Talk[] = [
  {
    youtubeId: 'jojEjMW1LZM',
    title: 'Don’t Make Law: Let It Emerge, Learn, and Adapt',
    event: 'Liberty International World Conference',
    year: '2024',
    href: '/posts/dont-make-law',
  },
  {
    youtubeId: '_RjZ7e1DbXo',
    title: 'Unleash Your Inner Company at Cambridge Judge Business School',
    event: 'Cambridge Judge Business School',
    year: '2017',
    href: '/posts/cambridge',
  },
]

function thumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

export default function FeaturedTalk() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  const open = useCallback((id: string) => {
    setActiveId(id)
  }, [])

  const close = useCallback(() => {
    setActiveId(null)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeId) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [activeId])

  return (
    <section
      id="talks"
      className="scroll-mt-24 bg-violet-dark text-on-violet"
      aria-labelledby="talks-heading"
    >
      <div className="site-container py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2
            id="talks-heading"
            className="font-display text-3xl text-white md:text-4xl lg:text-[2.65rem]"
          >
            Watch John speak
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() => open(FEATURED.youtubeId)}
              className="group relative block w-full overflow-hidden rounded-[var(--radius-card)] border border-white/15 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb(FEATURED.youtubeId)}
                alt=""
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                width={1280}
                height={720}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-violet-dark shadow-[var(--shadow-elevated)] transition-transform group-hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                    <path d="M8 5.5v11l9-5.5-9-5.5z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              <span className="sr-only">Play: {FEATURED.title}</span>
            </button>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              Featured talk
            </p>
            <h3 className="font-display mt-3 text-2xl leading-snug text-white md:text-[1.75rem]">
              {FEATURED.title}
            </h3>
            <p className="mt-3 text-sm text-white/75">
              {FEATURED.event}
              {FEATURED.year ? ` · ${FEATURED.year}` : ''}
              {FEATURED.runtime ? ` · ${FEATURED.runtime}` : ''}
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-white/85">
              {FEATURED.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => open(FEATURED.youtubeId)}
                className="btn btn-on-dark"
              >
                Watch the Talk
              </button>
              <Link href="/talks" className="btn btn-ghost-on-dark">
                Browse All Talks
              </Link>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {RELATED.map((talk) => (
            <li key={talk.youtubeId}>
              <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-white/12 bg-white/5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => open(talk.youtubeId)}
                  className="relative block w-full shrink-0 sm:w-44 md:w-48"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumb(talk.youtubeId)}
                    alt=""
                    className="aspect-video h-full w-full object-cover sm:aspect-auto sm:min-h-[7.5rem]"
                    width={480}
                    height={360}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-violet-dark">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M5 3.2v7.6L11 7 5 3.2z" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                  <span className="sr-only">Play: {talk.title}</span>
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg leading-snug text-white">
                    {talk.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {talk.event}
                    {talk.year ? ` · ${talk.year}` : ''}
                  </p>
                  <Link
                    href={talk.href}
                    className="mt-auto pt-4 text-sm font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Talk details
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 z-[100] m-auto w-[min(960px,calc(100%-2rem))] max-w-none rounded-[var(--radius-card)] border-0 bg-black p-0 text-white shadow-[var(--shadow-elevated)] backdrop:bg-black/70 open:flex open:flex-col"
        onClose={close}
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <p id={titleId} className="truncate text-sm font-medium">
            Watch talk
          </p>
          <button
            type="button"
            onClick={close}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Close
          </button>
        </div>
        <div className="featured-video-container bg-black">
          {activeId ? (
            <iframe
              className="featured-video"
              src={`https://www.youtube-nocookie.com/embed/${activeId}?autoplay=1&rel=0`}
              title="Selected talk video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : null}
        </div>
      </dialog>
    </section>
  )
}

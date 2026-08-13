'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import cn from 'classnames'

const NAV = [
  { href: '/#speaking-topics', label: 'Topics' },
  { href: '/mission', label: 'About', match: 'mission' },
  { href: '/team', label: 'Team', match: 'team' },
  { href: '/talks', label: 'Talks & Writing', match: 'talks' },
  { href: '/investments', label: 'Ventures', match: 'investments' },
  { href: '/books', label: 'Books', match: 'books' },
]

export default function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (match?: string) => {
    if (!match) return false
    const segment = pathname.split('/')[1]
    if (match === 'books') return segment === 'books' || segment === 'uyic'
    return segment === match
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200',
        scrolled
          ? 'border-divider bg-background/95 shadow-[0_1px_0_rgb(25_24_23/0.04),0_8px_24px_rgb(25_24_23/0.06)] backdrop-blur-md'
          : 'border-transparent bg-background/90 backdrop-blur-sm'
      )}
    >
      <div className="site-container">
        <div className="flex items-center justify-between gap-3 py-2.5 md:gap-4 md:py-3">
          <Link
            href="/"
            className="group min-w-0 shrink py-1 no-underline"
            onClick={() => setOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/jcv-logo.png"
              alt="John Chisholm Ventures"
              className="h-8 w-auto max-w-[min(100%,14rem)] object-contain object-left sm:h-9 sm:max-w-[16rem] md:h-10 md:max-w-[18rem] lg:h-11 lg:max-w-[20rem]"
              width={1535}
              height={163}
            />
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-2.5 py-2 text-[0.9rem] font-medium text-muted no-underline transition-colors hover:text-foreground',
                  isActive(item.match) && 'text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn btn-secondary hidden px-3 text-sm sm:inline-flex sm:px-4 sm:text-[0.9375rem]"
            >
              Contact
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-divider text-foreground xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span
                  className={cn(
                    'block h-0.5 w-full bg-current transition-transform',
                    open && 'translate-y-2 rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-current transition-opacity',
                    open && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-current transition-transform',
                    open && '-translate-y-2 -rotate-45'
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            'border-t border-divider xl:hidden',
            open ? 'block' : 'hidden'
          )}
        >
          <nav
            className="flex flex-col gap-1 py-3"
            aria-label="Mobile primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-3 text-base font-medium text-foreground no-underline hover:bg-card',
                  isActive(item.match) && 'bg-card text-violet'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-secondary mt-2 w-full"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

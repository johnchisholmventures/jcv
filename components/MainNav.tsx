'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import cn from 'classnames'

const NAV = [
  { href: '/#resources', label: 'Resources', match: null as string | null },
  { href: '/mission', label: 'Mission', match: 'mission' },
  { href: '/investments', label: 'Investments', match: 'investments' },
  { href: '/team', label: 'Team', match: 'team' },
]

const EXTERNAL = [
  { href: 'http://unleashyourinnercompany.com', label: 'Unleash' },
  { href: 'http://integralpoem.com', label: 'Integral' },
]

export default function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (match: string | null) =>
    match ? pathname.split('/')[1] === match : false

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-8 sm:h-12 md:h-12 lg:h-14"
              src="/assets/jcv-logo.png"
              alt="John Chisholm Ventures"
            />
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-default-grey"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>

          <div
            className={cn(
              'md:flex md:items-center md:gap-1',
              open
                ? 'absolute left-0 right-0 top-16 z-40 bg-white border-b shadow-md flex flex-col px-5 py-4 gap-2'
                : 'hidden'
            )}
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'font-bold text-xl px-3 py-2 text-default-grey hover:text-default-purple',
                  isActive(item.match) && 'border-b-2 border-default-purple'
                )}
              >
                {item.label}
              </Link>
            ))}
            {EXTERNAL.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-xl px-3 py-2 text-default-purple hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const LINKS = [
  { href: '/#speaking-topics', label: 'Topics' },
  { href: '/mission', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/talks', label: 'Talks & Writing' },
  { href: '/investments', label: 'Ventures' },
  { href: '/books', label: 'Books' },
  { href: '/educators', label: 'Educator Resources' },
  { href: '/contact', label: 'Contact' },
]

const SOCIAL = [
  {
    href: 'https://www.linkedin.com/pub/john-chisholm/0/4/556',
    label: 'LinkedIn',
    icon: faLinkedin,
  },
  {
    href: 'https://twitter.com/johndchisholm',
    label: 'X (Twitter)',
    icon: faXTwitter,
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-divider bg-[color-mix(in_srgb,var(--color-background)_70%,#e8e2d6)]">
      <div className="site-container py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
          <div className="max-w-sm">
            <Link href="/" className="inline-block no-underline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/jcv-logo.png"
                alt="John Chisholm Ventures"
                className="h-9 w-auto max-w-[16rem] object-contain object-left md:h-10"
                width={1535}
                height={163}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              John Chisholm Ventures is the home of John Chisholm’s speaking,
              writing, and entrepreneurial work—and the team that supports it.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-divider text-foreground no-underline transition-colors hover:border-violet hover:text-violet"
                >
                  <FontAwesomeIcon icon={link.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground no-underline transition-colors hover:text-violet"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="divider-line my-10" />

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} John Chisholm Ventures. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

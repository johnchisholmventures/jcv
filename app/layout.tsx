import type { Metadata } from 'next'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import SiteLayout from '@/components/SiteLayout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johnchisholmventures.com'
const johnPortrait = '/assets/john/john-chisholm-current-portrait-preferred.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'John Chisholm | Entrepreneur, Author and International Speaker',
    template: '%s | John Chisholm',
  },
  description:
    'John Chisholm is a technology entrepreneur, author, and international speaker on entrepreneurship, innovation, artificial intelligence, regulation, and personal development.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'John Chisholm | Entrepreneur, Author and International Speaker',
    description:
      'John Chisholm is a technology entrepreneur, author, and international speaker on entrepreneurship, innovation, artificial intelligence, regulation, and personal development.',
    images: [
      {
        url: johnPortrait,
        width: 761,
        height: 809,
        alt: 'John Chisholm',
      },
    ],
    siteName: 'John Chisholm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Chisholm | Entrepreneur, Author and International Speaker',
    description:
      'Technology entrepreneur, author, and international speaker on entrepreneurship, innovation, AI, regulation, and personal development.',
    images: [johnPortrait],
  },
  icons: {
    icon: '/favicon/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'John Chisholm',
      url: siteUrl,
      image: `${siteUrl}${johnPortrait}`,
      jobTitle: 'Entrepreneur, Author, and International Speaker',
      sameAs: [
        'https://www.linkedin.com/pub/john-chisholm/0/4/556',
        'https://twitter.com/johndchisholm',
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'MIT' },
        { '@type': 'CollegeOrUniversity', name: 'Harvard Business School' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'John Chisholm Ventures',
      url: siteUrl,
      founder: { '@id': `${siteUrl}/#person` },
      description:
        'John Chisholm Ventures serves as the home of John Chisholm’s speaking, writing, and entrepreneurial work.',
    },
    {
      '@type': 'Book',
      name: 'Unleash Your Inner Company',
      author: { '@id': `${siteUrl}/#person` },
      url: `${siteUrl}/uyic`,
      image: `${siteUrl}/uyic_cover.jpg`,
      description:
        'A practical process for discovering business opportunities at the intersection of unmet customer needs and your own abilities, interests, relationships, and values.',
    },
    {
      '@type': 'Book',
      name: 'Integral: A Mathematical Odyssey',
      author: { '@id': `${siteUrl}/#person` },
      url: 'https://integralpoem.com/',
      image: `${siteUrl}/integral_cover.png`,
      description:
        'A children’s book about mathematics by John Chisholm, illustrated by Jean-François Robert.',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} antialiased`}
      >
        {/*
          THESIS: An experienced founder’s ideas, offered without pressure—not a VC firm homepage or article warehouse.
          OWN-WORLD: Warm off-white editorial field (#F6F3ED), charcoal type, deep violet action, sparingly used gold; serif display + sans interface; thin dividers, restrained cards, portrait photography.
          STORY: Visitor understands John is credible and experienced, sees where his ideas apply, and contacts him or watches a talk.
          FIRST VIEWPORT: Sticky name+contact nav; two-column hero—headline and dual CTAs left, recent portrait right.
          FORM: Brief-pinned premium author / lecture-series editorial (user design spec); seed key: brief-pinned.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}

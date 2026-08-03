import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import SiteLayout from '@/components/SiteLayout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'John Chisholm Ventures',
    template: 'JCV | %s',
  },
  description:
    'We help experienced and aspiring entrepreneurs achieve the freedom, independence, and ability to do what they love.',
  icons: {
    icon: '/favicon/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}

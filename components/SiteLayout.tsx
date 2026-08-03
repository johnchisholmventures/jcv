import Link from 'next/link'
import Footer from './Footer'
import MainNav from './MainNav'
import type { ReactNode } from 'react'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-black text-white text-sm py-2 px-4 text-center">
          <p>
            <span className="font-bold">Do you teach entrepreneurship?</span>{' '}
            <Link href="/educators" className="text-teal-400 hover:text-teal-300">
              Click here
            </Link>{' '}
            to find out how to get free copies of{' '}
            <em>Unleash Your Inner Company</em> for your class.
          </p>
        </div>
        <MainNav />
        <main className="py-12">{children}</main>
      </div>
      <Footer />
    </>
  )
}

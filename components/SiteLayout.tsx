import Footer from './Footer'
import MainNav from './MainNav'
import type { ReactNode } from 'react'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}

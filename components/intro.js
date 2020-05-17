import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const NavLink = ({href, children}) => <Link href={href}><a className='ml-2'>{children}</a></Link>

const navLinks = [
  {href: '/', title: 'Home'},
  {href: '/#', title: 'Investments'}
]

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <img src='/assets/logo.png'/>
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        John Chisholm Ventures
      </h1> */}
      <div className='flex flex-row'>
        {
          navLinks.map(({href, title}) => <NavLink href={href}>{title}</NavLink>)
        }
      </div>
    </section>
  )
}

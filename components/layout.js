import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import MainNav from '../components/mainNav'
import Link from 'next/link'

// Check out Unleash Your Inner Company: 10 Steps to Discover, Launch, and Scale Your Ideal Busines
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert>
          <div className='flex flex-row justify-center align-items-center'>
            <p className='pr-4'>
              <span className='font-bold'>Are you an educator?</span>
              <Link href='/educators'>
                <a className='text-teal-400 hover:text-teal-500' href='/educators'> Click here </a>
              </Link>
              to find out how to get free copies of <em>Unleash Your Inner Company</em> for your class.
            </p>
          </div>
        </Alert>
        <MainNav />
        <main className='py-12'>{children}</main>
      </div>
      <Footer />
    </>
  )
}

import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import MainNav from '../components/mainNav'
import { Button } from 'rbx'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert>
          <div className='flex flex-row justify-center align-items-center'>
            <p className='pr-4'>Check out John's new book: <a className='text-teal-400 hover:text-teal-500' href='http://integralpoem.com'>Integral: A Mathematical Odyssey</a></p>
          </div>
        </Alert>
        <MainNav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

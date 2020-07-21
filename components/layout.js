import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import MainNav from '../components/mainNav'
import { Button } from 'rbx'
// Check out Unleash Your Inner Company: 10 Steps to Discover, Launch, and Scale Your Ideal Busines
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert>
          <div className='flex flex-row justify-center align-items-center'>
            <p className='pr-4'>
              Check out 
              <em>
                <a className='text-teal-400 hover:text-teal-500' href='https://www.amazon.com/Unleash-Your-Inner-Company-Perseverance-ebook/dp/B0167HH5OI/ref=sr_1_2?dchild=1&keywords=unleash+your+inner+company&qid=1593840166&sr=8-2'> Unleash Your Inner Company</a>
              </em>
              : 10 Steps to Discover, Launch, and Scale Your Ideal Busines
            </p>
          </div>
        </Alert>
        <MainNav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

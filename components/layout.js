import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import MainNav from '../components/mainNav'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert active={false} />
        <MainNav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

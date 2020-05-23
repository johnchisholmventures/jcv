import '../styles/index.css'
import '../styles/rbx.scss'
import 'pure-react-carousel/dist/react-carousel.es.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

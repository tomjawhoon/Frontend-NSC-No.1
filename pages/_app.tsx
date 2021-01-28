import '../styles/globals.css'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import AOS from 'aos'
import { useEffect } from 'react'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'
import 'aos/dist/aos.css'
import 'antd/dist/antd.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import AOS from 'aos'
import { useEffect } from 'react'
import Head from 'next/head'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-copy-to-clipboard/build/react-copy-to-clipboard.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

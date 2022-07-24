import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../component/Navbar'

function MyApp({ Component, pageProps }) {
  return (<div>
    <Head>
      <title>First App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </div>
  )

}

export default MyApp

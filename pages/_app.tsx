import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RestClient from '../rest-client'

function MyApp({ Component, pageProps }: AppProps) {
  RestClient.a();
  return <Component {...pageProps} />
}


export default MyApp

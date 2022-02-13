import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RestClient from '../rest-client'

function MyApp({ Component, pageProps }: AppProps) {
  RestClient.getGitlabAccount();
  return <Component {...pageProps} />
}


export default MyApp

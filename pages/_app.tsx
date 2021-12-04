import type { AppProps } from 'next/app'
import { ThemeProvider } from '@theme-ui/core'
import theme from '@/styles/theme'
import Head from 'next/head'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head><title>Braincache</title></Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
import { globalCss } from '@stitches/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Box from '../components/layout/Box'
import DocsPage from '../components/DocsPage'

const globalCSS = globalCss({
  '@font-face': [
    {
      fontFamily: 'Assistant',
      src: 'url("/fonts/Assistant-Light.ttf")',
      fontWeight: '300',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Assistant',
      src: 'url("/fonts/Assistant-Regular.ttf")',
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Assistant',
      src: 'url("/fonts/Assistant-Medium.ttf")',
      fontWeight: '500',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Assistant',
      src: 'url("/fonts/Assistant-SemiBold.ttf")',
      fontWeight: '600',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Assistant',
      src: 'url("/fonts/Assistant-Bold.ttf")',
      fontWeight: '700',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],

  '*, *::before, *::after': {
    fontFamily: 'Assistant',
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    margin: 0,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalCSS()

  const router = useRouter()
  const isDocs = router.pathname.includes('/docs')

  return (
    <>
      <Box
        css={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: 99,
        }}
      >
        <Header />
      </Box>
      <Box css={{ position: 'relative', paddingTop: '$7' }}>
        {isDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : (
          <Component {...pageProps} />
        )}
      </Box>
    </>
  )
}
export default MyApp

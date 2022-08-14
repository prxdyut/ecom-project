import '../styles/font.css'
import '../styles/globals.css'

import ThemeNesting from '../src/context/themeProvider'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeNesting>
      <Component {...pageProps} />
    </ThemeNesting>
  )
}

export default MyApp

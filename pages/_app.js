import "../styles/font.css";
import "../styles/globals.css";

import Script from "next/script";

import ThemeNesting from "../src/context/themeProvider";
import Transition from "../src/context/TransitionProvider";
import BottombarProvider from "../src/context/AppbarProvider/Bottombar";
import TopbarProvider from "../src/context/AppbarProvider/Topbar";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeNesting>
      <TopbarProvider />
      {/* <Script
        src="./script.js"
        onLoad={() => {
          console.log('Loaded Script');
        }}
      /> */}
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <BottombarProvider />
    </ThemeNesting>
  );
}

export default MyApp;

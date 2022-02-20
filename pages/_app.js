import "../styles/globals.css";

import "../styles/adminLayout.css"
import "../styles/defaultLayout.css"
import "../styles/register.css"
import "../styles/shop.css"
import "../styles/news.css"

import LayoutWrapper from "../conponents/layouts/LayoutWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;

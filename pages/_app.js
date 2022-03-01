import "../styles/globals.css";

import "../styles/adminLayout.css"
import "../styles/defaultLayout.css"
import "../styles/register.css"
import "../styles/shop.css"
import "../styles/news.css"
import "../styles/modal.css"
import "../styles/connect.css"
import "../styles/account.css"
import "../styles/product_booster.css"
import "../styles/taking_sales.css"
import "../styles/view_p.css"
import "../styles/expenses.css"
import "../styles/calendar.css"
import "../styles/charts.css"
import "../styles/slide_banner.css"

import LayoutWrapper from "../conponents/layouts/LayoutWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;

import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/sidebar.css";
import "../styles/bootstrap.5.2.2.css"
import "../styles/dropdown.css"
import "../styles/icones.css"



function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (Page => Page)
  return (
    <>
      <Script src="/scripts/bootstrap.5.2.2.js"/>
   
      { getLayout(<Component {...pageProps} />) }


    </>
  );
}

export default MyApp;

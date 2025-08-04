import '../styles/globals.css';
import { StateContextProvider } from '../Context';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZexoCash - DApps Token Sale</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.png"/>
      </Head>

      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>

      {}
      {/* Script ini membuat object 'google' kosong agar tidak error */}
      <Script
        id="google-maps-workaround"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window.google === 'undefined' || typeof window.google.maps === 'undefined') {
              window.google = {
                maps: {
                  event: {
                    addDomListener: function() {},
                  },
                  Map: function() {
                    return {
                      // Fungsi palsu di dalam Map jika diperlukan
                      setCenter: function() {},
                      setZoom: function() {},
                    };
                  },
                  Marker: function() {},
                  // Tambahkan properti palsu lainnya di sini jika error baru muncul
                }
              };
            }
          `,
        }}
      />

      {/* Memuat semua script lainnya seperti biasa */}
      <Script src="/assets/js/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="/assets/bootstrap/js/bootstrap.min.js" />
      <Script src="/assets/owlcarousel/js/owl.carousel.min.js" />
      <Script src="/assets/js/magnific-popup.min.js" />
      <Script src="/assets/js/waypoints.min.js" />
      <Script src="/assets/js/parallax.js" />
      <Script src="/assets/js/jquery.countdown.min.js" />
      <Script src="/assets/js/particles.min.js" />
      <Script src="/assets/js/jquery.dd.min.js" />
      <Script src="/assets/js/jquery.counterup.min.js" />
      <Script src="/assets/js/spop.min.js" />
      <Script src="/assets/js/notification.js" />
      <Script src="/assets/js/scripts.js" />
      <Script src="/index.js" />
    </>
  );
}
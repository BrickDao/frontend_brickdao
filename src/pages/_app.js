import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import { InitSwAuth } from '@skill-wallet/auth';


export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    InitSwAuth();
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}

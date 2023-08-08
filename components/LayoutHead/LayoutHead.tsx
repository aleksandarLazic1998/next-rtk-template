'use client';
import Head from 'next/head';
import { useEffect } from 'react';

export const LayoutHead = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  return (
    <Head>
      <meta name="theme-color" content="#000000" />
      {/* IOS support for icons on PWA */}
      <link rel="apple-touch-icons" href="/assets/icons/icon-48x48.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-72x72.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-96x96.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-128x128.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-144x144.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-152x152.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-192x192.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-284x284.png" />
      <link rel="apple-touch-icons" href="/assets/icons/icon-512x512.png" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
    </Head>
  );
};

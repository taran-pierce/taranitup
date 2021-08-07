import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../header';
import styles from './layout.module.scss';

// using GTM for analytics
import TagManager from 'react-gtm-module';

export default function Layout({
    children,
    title,
    pathname,
  }) {

  const canonical = `http://www.taranitup.com${pathname}`;

  return (
    <>
      <Head>
        <title>{title} - taranitup.com</title>
        <link rel="canonical" href={canonical} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="Author" content="Taran Pierce" />
        <meta name="description" content="Taran Pierce aka William Taran Pierce, personal website for testing fun stuff." />
        <meta name="keywords" content="Taran Pierce, taranitup, Software Engineer, William Taran Pierce, taranitup, Nodejs, Nextjs, AWS, CodeBuild, Route 53, S3, Cloud Front, Contentful" />
        <link rel="preconnect" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RC2EMVBFTN"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RC2EMVBFTN');`}}>
        </script>
      </Head>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
};

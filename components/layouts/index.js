import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../header';
import styles from './layout.module.scss';

// using GTM for analytics
import TagManager from 'react-gtm-module';

export default function Layout({
    children,
    title,
  }) {

  const { pathname } = useRouter();

  const canonical = `http://www.taranitup.com${pathname}`;

  // setup GTM and add pageId from router to dataLayer
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-NJGEK61WEJ',
      dataLayer: {
        pageId: pathname,
      }
    };
    
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Head>
        <title>{title} - taranitup.com</title>
        <link rel="canonical" href={canonical} />
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="Author" content="Taran Pierce" />
        <meta name="description" content="Taran Pierce aka William Taran Pierce, personal website for testing fun stuff." />
        <meta name="keywords" content="Taran Pierce, Nodejs, Nextjs, AWS, CodeBuild, Route 53, S3" />
      </Head>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
};

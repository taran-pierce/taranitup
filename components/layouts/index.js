import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.scss';

// using GTM for analytics
import TagManager from 'react-gtm-module';

export default function Layout({children}) {

  // setup GTM and add pageId from router to dataLayer
  useEffect(() => {
    const { pathname } = useRouter();
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
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
};

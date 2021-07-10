import React from 'react';
import styles from './layout.module.scss';

export default function Layout({children}) {
  return (
    <>
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
};

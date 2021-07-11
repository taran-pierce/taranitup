import React from 'react';
import Container from '../container';
import Navigation from '../navigation';

import styles from './header.module.scss';

export default function Header({children}) {
  return (
    <header
      className={styles.header}
    >
      <Container>
        <Navigation activePage={'home'} />
      </Container>
    </header>
  );
};

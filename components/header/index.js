import React from 'react';
import Container from '../container';
import Navigation from '../navigation';

export default function Header({children}) {
  return (
    <header>
      <Container>
        <Navigation activePage={'home'} />
      </Container>
    </header>
  );
};

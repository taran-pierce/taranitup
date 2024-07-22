import React from 'react';
import Navigation from '../navigation';

import styled from 'styled-components';

const StyledHeader = styled.header`
  border: 1px solid black;
  box-shadow: 0 4px 4px rgba(0,0,0,.4);
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;

export default function Header({children}) {
  return (
    <>
      <StyledHeader data-testid="header">
        <Navigation activePage={'home'} />
      </StyledHeader>
    </>
  );
};

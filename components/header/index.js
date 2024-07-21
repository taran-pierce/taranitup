import React from 'react';
import Navigation from '../navigation';
import { useWindowDimensions } from '../../utils/useWindowDimensions';

import styled from 'styled-components';

const MainHeader = styled.header`
  border: 1px solid black;
  box-shadow: 0 4px 4px rgba(0,0,0,.4);
`;

export default function Header({children}) {
  return (
    <>
      <MainHeader>
        <Navigation activePage={'home'} />
      </MainHeader>
    </>
  );
};

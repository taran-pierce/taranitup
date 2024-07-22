import Link from 'next/link';

import styled from 'styled-components';

const StyledLogo = styled.div`
  font-weight: bold;
`;

export default function Logo() {
  return (
    <>
      <StyledLogo>
        <Link href="/">taranitup.com</Link>
      </StyledLogo>
    </>
  );
}
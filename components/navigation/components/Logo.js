import {
  Button,
} from '@mui/material';

import styled from 'styled-components';

const LogoDiv = styled.div`
  font-weight: bold;
`;

export default function Logo() {
  return (
    <>
      <LogoDiv>
        <Button
          size='large'
          sx={{
            fontWeight: 'bold',
          }}
          href="/"
        >TaranItUp</Button>
      </LogoDiv>
    </>
  );
}
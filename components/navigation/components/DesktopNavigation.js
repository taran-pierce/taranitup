import React from 'react';

// leverage Next Link in the main navigation for quick routing
// cant quite seem to combine MUI Link and Next Link though
import Link from 'next/link';

import styled from 'styled-components';

import {
  Box,
  Container,
} from '@mui/material';

const Navigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  flex-grow: 1;
`;

export default function DesktopNavigation({
  links,
}) {
  return (
    <>
      <Box component="nav">
        <Container>
          <Navigation>
            {links && links.map((link, key) => {
              return (
                <ListItem key={key}>
                  <Link
                    href={link.href}
                  >{link.name}</Link>
                </ListItem>
              )
            })}
          </Navigation>
        </Container>
      </Box>
    </>
  );
};

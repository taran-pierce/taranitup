import React, {
  useState,
} from 'react';

import styled from 'styled-components';

import {
  Box,
  Link,
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

export default function MainNavigation({
  links,
}) {
  return (
    <>
      <Box component="nav">
        <Container>
          <Navigation>
            {links && links.map((link, key) => {
              return (
                <ListItem>
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

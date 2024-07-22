import React, {
  useState,
} from 'react';

// leverage Next Link in the main navigation for quick routing
// cant quite seem to combine MUI Link and Next Link though
import Link from 'next/link';

import {
  Drawer,
  Button,
} from '@mui/material';

import styled from 'styled-components';

const Navigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const ListItem = styled.li`
  padding: .5rem;
`;

export default function MobileNavigation({
  links,
}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        size='large'
        variant='outlined'
      >Menu</Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
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
      </Drawer>
    </>
  );
}

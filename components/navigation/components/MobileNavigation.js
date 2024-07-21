import {
  // useEffect,
  useState,
} from 'react';

import {
  Link,
  Drawer,
  Button,
} from '@mui/material';

import styled from 'styled-components';

const Navigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
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
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
      {links && links.map((link, key) => {
        return (
          <ListItem key={key}>
            <Link
              href={link.href}
            >{link.name}</Link>
          </ListItem>
        )
      })}
      </Drawer>
    </>
  );
}

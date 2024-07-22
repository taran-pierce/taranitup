import React, {
  useState,
  useEffect,
} from 'react';

import Logo from './components/Logo';
import MobileNavigation from './components/MobileNavigation';
import DesktopNavigation from './components/DesktopNavigation';

import {
  Box,
  Container,
  Grid,
} from '@mui/material';

import useWindowDimensions from '../../utils/useWindowDimensions';

export default function Navigation({activePage}) {
  const links = [
    {
      name: 'about',
      href: '/about',
    },
    {
      name: 'AWS',
      href: '/aws',
    },
    {
      name: 'Next.js',
      href: '/nextjs',
    },
    {
      name: 'Cloudinary',
      href: '/cloudinary',
    },
    {
      name: 'Contentful',
      href: '/contentful',
    },
  ];

  const {
    width,
  } = useWindowDimensions();

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(width <= 767)
  }, [width])

  return (
    <>
      <Box
        component='nav'
        data-testid="navigation"
        role="navigation"
      >
        <Container>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              sx={{
                flexGrow: 1,
              }}
            >
              <Logo />
            </Grid>
            <Grid
              item
              sx={{
                flexGrow: 1,
                textAlign: isMobile ? 'right' : 'left',
              }}
            >
              {isMobile ?
                <MobileNavigation
                  links={links}
                /> : 
                <DesktopNavigation
                  links={links}
                />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

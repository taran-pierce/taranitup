import React, {
  useState,
  useEffect,
} from 'react';

import MobileNavigation from './components/MobileNavigation';
import DesktopNavigation from './components/DesktopNavigation';

import styled from 'styled-components';

import {
  Box,
  Link,
  Container,
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
    height,
    width,
  } = useWindowDimensions();

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(width <= 767)
  }, [width])

  return (
    <>
      <Box
        component="nav"
        sx={{
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
      </Box>
    </>
  );
};

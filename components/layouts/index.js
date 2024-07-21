import React from 'react';
import Head from 'next/head';
import { Main, NextScript } from 'next/document';
import Header from '../header';

import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';

export default function Layout({
    children,
    title,
    pathname,
  }) {

  const canonical = `http://www.taranitup.com${pathname}`;

  const theme = createTheme({
    spacing: 8,
    palette: {
      primary: {
        main: '#333',
        dark: '#000'
      },
    },
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="Author" content="Taran Pierce" />
        <meta name="description" content="Taran Pierce aka William Taran Pierce, personal website for testing fun stuff." />
        <meta name="keywords" content="Taran Pierce, taranitup, Software Engineer, William Taran Pierce, Node.js, Next.js, AWS, CodeBuild, Route 53, S3, CloudFront, Contentful" />
        <link rel="preconnect" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <NextScript dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RC2EMVBFTN');`}}>
        </NextScript>
      </Head>
      <ThemeProvider
        theme={theme}
      >
        <Header />
        <Container
          sx={{
            spacing: 1,
          }}
        >
          <Box
            component="main"
            sx={{
              bgcolor: 'primary.main',
            }}
          >
            {children}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

import React from 'react';
import Layout from '../components/layouts';

import {
  Container,
  Box,
  Typography,
  Link,
  List,
  ListItem,
} from '@mui/material';

export default function About() {

  return (
    <>
     <Layout 
       title={`About`}
      >
        <Box
          component="section"
        >
          <Container>
            <Typography
              component={`h1`}
            >About this site</Typography>
          </Container>
        </Box>
        <Box
          component={`section`}
        >
          <Container>
            <Typography
              component={`h2`}
              sx={{
                marginBottom: '1rem',
              }}
            >What is it using you ask?</Typography>
            <Typography
              component={`h3`}
            >Next.js - <Link href={`https://nextjs.org/`} target={`_blank`} rel={`noopener`}>https://nextjs.org/</Link></Typography>
            <List
              sx={{
                marginBottom: '1rem',
              }}
            >
              <ListItem>
                <Typography><Typography component="u">Static Site Generation</Typography> - takes all your pages and will generate a set of static html/css/js for you. So long as your site does not rely on dynamic data, though you can still use dyanmic data with SSG, this is type of site can be hosted on a CDN and cached for even faster delivery.</Typography>
              </ListItem>
              <ListItem>
                <Typography><Typography component="u">Next Link</Typography> - this is how the preloading of the page was taken care of. A really nice feature built-in to Next.js. A component that you use to wrap your anchor tags in. When Next.js sees this component, it will preload the linked page after the current page the client is viewing has downloaded. Making the next page they navigate to load almost instantly.</Typography>
              </ListItem>
            </List>
            <Typography
              component={`h3`}
            >AWS - <Link href={`https://aws.amazon.com/`} target={`_blank`} rel={`noopener`}>https://aws.amazon.com/</Link></Typography>
            <List
              sx={{
                marginBottom: '1rem',
              }}
            >
              <ListItem>
                <Typography><Typography component="u">Route 53</Typography> - Amazons highly available cloud Domain Name System web service.</Typography>
              </ListItem>
              <ListItem>
                <Typography><Typography component="u">S3</Typography></Typography>
              </ListItem>
              <ListItem>
                <Typography><Typography component="u">CodeBuild</Typography></Typography>
              </ListItem>
              <ListItem>
                <Typography><Typography component="u">CloudFront</Typography></Typography>
              </ListItem>
            </List>
            <Typography
              component={`h3`}
            >Google Analytics - <Link href={`https://analytics.google.com/`} target={`_blank`} rel={`noopener`}>https://analytics.google.com/</Link></Typography>
            <List
              sx={{
                marginBottom: '1rem',
              }}
            >
              <ListItem>
                <Typography><Typography component="u">Google Analytics</Typography></Typography>
              </ListItem>
            </List>
            <Typography
              component={`h3`}
            >Cloudinary - <Link href={`https://cloudinary.com/`} target={`_blank`} rel={`noopener`}>https://cloudinary.com/</Link></Typography>
            <List
              sx={{
                marginBottom: '1rem',
              }}
            >
              <ListItem>
                <Typography><Typography component="u">CDN</Typography></Typography>
              </ListItem>
            </List>
            <Typography
              component={`h3`}
            >Contentful - <Link href={`https://www.contentful.com/`} target={`_blank`} rel={`noopener`}>https://www.contentful.com/</Link></Typography>
            <List
              sx={{
                marginBottom: '1rem',
              }}
            >
              <ListItem>
                <Typography><Typography component="u">Headless CMS</Typography></Typography>
              </ListItem>
            </List>
            <Typography
              component={`h3`}
            >MUI - <Link href={`https://mui.com/`} target={`_blank`} rel={`noopener`}>https://mui.com/</Link></Typography>
            <List
              sx={{
                marginBottom: '1rem',
              }}
            >
              <ListItem>
                <Typography>MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.</Typography>
              </ListItem>
            </List>
          </Container>
        </Box>
     </Layout>
    </>
  );
};

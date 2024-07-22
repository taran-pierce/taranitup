import React from 'react';
import Layout from '../components/layouts';

import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  Paper,
  Grid,
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
          <Typography
            variant={`h1`}
          >About this site</Typography>
          <Typography
            variant={`h2`}
            sx={{
              marginBottom: '1rem',
            }}
          >What is it using? I am glad that you asked!</Typography>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
              elevation={2}
              >
                <List
                  sx={{
                    marginBottom: '1rem',
                  }}
                >
                  <ListItem>
                    <Typography
                      variant={`h3`}
                    >Next.js</Typography>
                    <Link href={`https://nextjs.org/`} target={`_blank`} rel={`noopener`}>https://nextjs.org/</Link>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">Static Site Generation</Typography> - takes all your pages and will generate a set of static html/css/js for you. So long as your site does not rely on dynamic data, though you can still use dyanmic data with SSG, this is type of site can be hosted on a CDN and cached for even faster delivery.</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">Next Link</Typography> - this is how the preloading of the page was taken care of. A really nice feature built-in to Next.js. A component that you use to wrap your anchor tags in. When Next.js sees this component, it will preload the linked page after the current page the client is viewing has downloaded. Making the next page they navigate to load almost instantly.</Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={2}
              >
                <List
                  sx={{
                    marginBottom: '1rem',
                  }}
                >
                  <ListItem>
                    <Typography
                      variant={`h3`}
                    >AWS</Typography>
                    <Link href={`https://aws.amazon.com/`} target={`_blank`} rel={`noopener`}>https://aws.amazon.com/</Link>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">Route 53</Typography> - Amazons highly available cloud Domain Name System web service.</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">S3</Typography></Typography>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">CodeBuild</Typography></Typography>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">CloudFront</Typography></Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={2}
              >
                <List
                  sx={{
                    marginBottom: '1rem',
                  }}
                >
                  <ListItem>
                    <Typography
                    variant={`h3`}
                  >Google Analytics</Typography>
                  <Link href={`https://analytics.google.com/`} target={`_blank`} rel={`noopener`}>https://analytics.google.com/</Link>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">Google Analytics</Typography></Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={2}
              >
                <List
                  sx={{
                    marginBottom: '1rem',
                  }}
                >
                  <ListItem>
                    <Typography
                      variant={`h3`}
                    >Cloudinary</Typography>
                    <Link href={`https://cloudinary.com/`} target={`_blank`} rel={`noopener`}>https://cloudinary.com/</Link>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">CDN</Typography></Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={2}
              >
                <List
                  sx={{
                    marginBottom: '1rem',
                  }}
                >
                  <ListItem>
                    <Typography
                      variant={`h3`}
                    >Contentful</Typography>
                    <Link href={`https://www.contentful.com/`} target={`_blank`} rel={`noopener`}>https://www.contentful.com/</Link>
                  </ListItem>
                  <ListItem>
                    <Typography><Typography variant="u">Headless CMS</Typography></Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Paper
                elevation={2}
              >
                <List
                  sx={{
                    marginBottom: '1rem',
                  }}
                >
                  <ListItem>
                    <Typography
                      variant={`h3`}
                    >MUI</Typography>
                    <Link href={`https://mui.com/`} target={`_blank`} rel={`noopener`}>https://mui.com/</Link>
                  </ListItem>
                  <ListItem>
                    <Typography>MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.</Typography>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
     </Layout>
    </>
  );
};

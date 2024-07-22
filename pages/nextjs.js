import React from 'react';
import Layout from '../components/layouts';

import {
  Typography,
  Box,
} from '@mui/material';

export default function Nextjs() {

  return (
    <>
     <Layout 
       title={`Next.js`}
      >
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography
            component={`h1`}
          >Next.js</Typography>
          <Typography
            component={`h2`}
          >What parts of Next.js are being used?</Typography>
          <Typography>Next.js is very flexible and has a lot of features. As I go through and implement them, I'll talk a bit about each one. It is actually really easy to set up and they have pretty good documentation for a basic setup.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >Static Site Generation</Typography>
          <Typography>With the latest Next.js this comes built in with almost zero configuration so long as you have a simple static site. Simply build then export your project using their built in commands and Next.js creates an /out/ for you with your static site.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >Next Link</Typography>
          <Typography>A wrapper for your anchor tags that will preload the destination so when the link is clicked the next "page load" is instant. Really easy to use built in functionality of Next.js using their next/link module.</Typography>
        </Box>
     </Layout>
    </>
  );
};

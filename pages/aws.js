import React from 'react';
import Layout from '../components/layouts';

import {
  Typography,
  Box,
} from '@mui/material';

export default function Aws() {

  return (
    <>
     <Layout 
       title={`AWS`}
      >
        <Box
          component="section"
        >
          <Typography
            component={`h1`}
          >AWS</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography
            component={`h2`}
          >What are the different services and how were they set up?</Typography>
          <Typography>There are a few things being used and some were tricker than others to set up. So let's go through them.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >Route 53</Typography>
          <Typography>A highly available and scalable cloud Domain Name System (DNS) web service.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >S3</Typography>
          <Typography>Cloud Object Storage.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >CodeBuild</Typography>
          <Typography>A fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >CloudFront</Typography>
          <Typography>Amazon CloudFront is a content delivery network (CDN) service built for high performance, security, and developer convenience.</Typography>
        </Box>
     </Layout>
    </>
  );
};

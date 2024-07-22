import React from 'react';
import Layout from '../components/layouts';

import {
  Container,
  Box,
  Typography,
} from '@mui/material';

export default function Contentful() {

  return (
    <>
     <Layout 
       title={`Contentful`}
      >
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Container>
            <Typography
              component={`h1`}
            >Contentful</Typography>
          </Container>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Container>
            <Typography
              component={`h2`}
            >Headless CMS</Typography>
            <Typography>Cloud-native, API-first, and endlessly extensible. Personalize, control and manage content for your site via a headless CMS with a nice GUI.</Typography>
          </Container>
        </Box>
     </Layout>
    </>
  );
};

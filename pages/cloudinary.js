import React from 'react';
import Layout from '../components/layouts';

import {
  Box,
  Typography,
} from '@mui/material';

export default function Cloudinary() {

  return (
    <>
     <Layout 
       title={`Cloudinary`}
      >
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography
            component={`h1`}
          >Cloudinary</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography
            component={`h2`}
          >CDN</Typography>
          <Typography>Store, transform, optimize and deliver all your media assets.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >Image Hosting</Typography>
          <Typography>The entire one image that is on the site so far is coming from Cloudinary's CDN.</Typography>
        </Box>
        <Box
          component="section"
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Typography 
            component={`h3`}
          >Image Manipulation</Typography>
          <Typography>The image is much larger and I am using Cloudinary to scale the image down to 280px by 280px. Then another transformation to crop and focus more on the face of the image. As well as delivering the nextgen format of the image.</Typography>
        </Box>
     </Layout>
    </>
  );
};

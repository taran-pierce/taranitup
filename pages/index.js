import React, { 
  useEffect, 
  useState,
 } from 'react';
import Layout from '../components/layouts';
import AppImage from '../components/image';
import RichText from '../components/richText';

import { useWindowDimensions } from '../utils/useWindowDimensions';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const contentful = require('contentful');

function Index({
  componentData,
}) {
  const [
    title,
    pageComponents,
    route,
  ] = componentData;

  const {
    width,
  } = useWindowDimensions();

  const [isMobile, setIsMobile] = useState(false);

  // find initial viewport size
  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  return (
    <>
      <Layout 
        title={title.pageTitle}
        pathname={route.pathname}  
      >
        <Box
          component="section"
          sx={{
            flexGrow: 1,
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid 
                item
                xs={12}
                md={6}
              >
                <Typography
                  component="h1"
                >Taran Pierce</Typography>
                <Typography
                  component="h2"
                >Welcome to taranitup.com</Typography>
                <ul>
                  <li>
                    <a href={`https://www.linkedin.com/in/taran-pierce-4b6b5721/`} rel={`noopener`} target={`_blank`}>LinkedIn</a>
                  </li>
                  <li>
                    <a href={`https://github.com/taran-pierce`} rel={`noopener`} target={`_blank`}>GitHub</a>
                  </li>
                  <li>
                    <a href={`https://www.taranpierce.com`} rel={`noopener`} target={`_blank`}>taranpierce.com</a>
                  </li>
                  <li>
                    <a href={`https://photos.taranpierce.com`} rel={`noopener`} target={`_blank`}>Photos</a>
                  </li>
                </ul>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <AppImage 
                  imageName={'taranitup/taran.jpg'}
                  cloudName={'tpierce36'}
                  options={[
                    {
                      crop: 'scale',
                      height: '280',
                      width: '280',
                      fetchFormat: 'auto',
                    },
                    {
                      effect: 'outline:2',
                      color: 'black',
                    }
                  ]}
                  alt={'Taran Pierce'}
                  height={280}
                  width={280}
                  dataSrc={`taran.jpg`}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        {pageComponents.components.map((component) => {
          const {
            fields,
            sys,
          } = component || {};

          const {
            bodyCopy,
          } = fields || {};

          return (
            <Box
              component="section"
            >
              <Container>
                {bodyCopy.content.map((copy, index) => {
                  return (
                    <RichText copy={copy} key={`${copy}-${index}`} />
                  );
                })}
              </Container>
            </Box>
          );
        })}
      </Layout>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  });

  const componentData = [];

  await client.getEntry('5td3EthQyEbrg4ZnGG14k')
    .then((entry) => {
      Object.keys(entry.fields).forEach(field => field != 'metaData' ? componentData.push({ [field]: entry.fields[field]}) : null);
    })
    .catch(console.error);

  return {
    componentData,
  };
};

export default Index;

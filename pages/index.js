import React from 'react';
import Layout from '../components/layouts';
import RichText from '../components/richText';

import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  List,
  ListItem,
  Link,
} from '@mui/material';

const contentful = require('contentful');

const links = [
  {
    href: 'https://www.linkedin.com/in/taran-pierce-4b6b5721/',
    name: 'LinkedIn',
  },
  {
    href: 'https://github.com/taran-pierce',
    name: 'GitHub',
  },
  {
    href: 'https://www.taranpierce.com',
    name: 'taranpierce.com',
  },
  {
    href: 'https://photos.taranpierce.com',
    name: 'Photos',
  },
];

function Index({
  componentData,
}) {
  const [
    title,
    pageComponents,
    route,
  ] = componentData;

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
          <Grid container spacing={2}>
            <Grid 
              item
              xs={12}
              md={6}
            >
              <Typography
                  variant="h1"
                >Taran Pierce</Typography>
                <Typography
                  variant="h2"
                  sx={{
                    marginBottom: '1rem',
                  }}
                >Welcome to taranitup.com</Typography>
                <Typography
                  sx={{
                    marginBottom: '1rem',
                  }}
                >Just a random place for random things, if that is what you are after then you have made it to the right place!</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Card>
                <CardActionArea>
                  <CardMedia 
                    component="img"
                    height="300"
                    image="https://res.cloudinary.com/tpierce36/image/upload/c_scale,f_auto,w_400/v1626535757/taranitup/taran.jpg"
                    alt="Taran Pierce"
                  />
                </CardActionArea>
                <CardContent>
                  <List>
                    {links.map((link, key) =>
                      <ListItem
                        key={key}
                      >
                        <Link
                          href={link.href} 
                          target="_blank" 
                          rel="noopener"
                        >{link.name}</Link>
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {pageComponents.components.map((component, key) => {
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
              key={key}
              sx={{
                marginTop: '2rem',
              }}
            >
              {bodyCopy.content.map((copy, index) => {
                return (
                  <RichText copy={copy} key={`${copy}-${index}`} />
                );
              })}
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

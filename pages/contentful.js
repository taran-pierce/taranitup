import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';

export default function Contentful() {

  return (
    <>
     <Layout 
       title={`Contentful`}
      >
        <section>
          <Container>
            <Text
              markup={`h1`}
              content={[`Contentful`]}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text
              markup={`h2`}
              content={[`Headless CMS`]}
            />
            <Text
              content={[`Cloud-native, API-first, and endlessly extensible. Personalize, control and manage content for your site via a headless CMS with a nice GUI.`]}
            />
          </Container>
        </section>
     </Layout>
    </>
  );
};

import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';

export default function Aws() {

  return (
    <>
     <Layout 
       title={`AWS`}
      >
        <section>
          <Container>
            <Text
              markup={`h1`}
              content={`AWS`} 
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text
              markup={`h2`}
              content={`What are the different services and how were they set up?`}
            />
            <Text
              content={`There are a few things being used and some were tricker than others to set up. So let's go through them.`}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={`Route 53`}
            />
            <Text
              content={`A highly available and scalable cloud Domain Name System (DNS) web service.`}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={`S3`}
            />
            <Text
              content={`Cloud Object Storage.`}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={`CodeBuild`}
            />
            <Text
              content={`A fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.`}
            />
          </Container>
        </section>
     </Layout>
    </>
  );
};

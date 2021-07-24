import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';

export default function About() {

  return (
    <>
     <Layout 
       title={`About`}
      >
        <section>
          <Container>
            <Text
              markup={`h1`}
              content={`About this site`} 
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text
              markup={`h2`}
              content={`What is it using?`}
            />
            <h3>NextJS - <a href={`https://nextjs.org/`} target={`_blank`} rel={`noopener`}>https://nextjs.org/</a></h3>
            <ul>
              <li>Static Site Generation</li>
              <li>Next Link</li>
            </ul>
            <h3>AWS - <a href={`https://aws.amazon.com/`} target={`_blank`} rel={`noopener`}>https://aws.amazon.com/</a></h3>
            <ul>
              <li>Route 53</li>
              <li>S3</li>
              <li>CodeBuild</li>
              <li>Cloud Front</li>
            </ul>
            <h3>Google Analytics - <a href={`https://analytics.google.com/`} target={`_blank`} rel={`noopener`}>https://analytics.google.com/</a></h3>
            <ul>
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
            </ul>
            <h3>Cloudinary - <a href={`https://cloudinary.com/`} target={`_blank`} rel={`noopener`}>https://cloudinary.com/</a></h3>
            <ul>
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
            </ul>
          </Container>
        </section>
     </Layout>
    </>
  );
};

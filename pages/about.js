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
              content={[`About this site`]}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text
              markup={`h2`}
              content={[`What is it using you ask?`]}
            />
            <h3>Next.js - <a href={`https://nextjs.org/`} target={`_blank`} rel={`noopener`}>https://nextjs.org/</a></h3>
            <ul>
              <li><strong>Static Site Generation</strong> - takes all your pages and will generate a set of static html/css/js for you. So long as your site does not rely on dynamic data, though you can still use dyanmic data with SSG, this is type of site can be hosted on a CDN and cached for even faster delivery.</li>
              <li><strong>Next Link</strong> - this is how the preloading of the page was taken care of. A really nice feature built-in to Next.js. A component that you use to wrap your anchor tags in. When Next.js sees this component, it will preload the linked page after the current page the client is viewing has downloaded. Making the next page they navigate to load almost instantly.</li>
            </ul>
            <h3>AWS - <a href={`https://aws.amazon.com/`} target={`_blank`} rel={`noopener`}>https://aws.amazon.com/</a></h3>
            <ul>
              <li><strong>Route 53</strong> - Amazons highly available cloud Domain Name System web service. I used this service to set up a hosted zone for the domain name I purchased. Within Route 53 I was able to set up nameservers, A records and CNAMEs for domains that I am able to manage the DNS for.</li>
              <li><strong>S3</strong></li>
              <li><strong>CodeBuild</strong></li>
              <li><strong>CloudFront</strong></li>
            </ul>
            <h3>Google Analytics - <a href={`https://analytics.google.com/`} target={`_blank`} rel={`noopener`}>https://analytics.google.com/</a></h3>
            <ul>
              <li><strong>Google Analytics</strong></li>
            </ul>
            <h3>Cloudinary - <a href={`https://cloudinary.com/`} target={`_blank`} rel={`noopener`}>https://cloudinary.com/</a></h3>
            <ul>
              <li><strong>CDN</strong></li>
            </ul>
            <h3>Contentful - <a href={`https://www.contentful.com/`} target={`_blank`} rel={`noopener`}>https://www.contentful.com/</a></h3>
            <ul>
              <li><strong>Headless CMS</strong></li>
            </ul>
          </Container>
        </section>
     </Layout>
    </>
  );
};

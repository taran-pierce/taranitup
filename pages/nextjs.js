import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';

export default function Nextjs() {

  return (
    <>
     <Layout 
       title={`Next.js`}
      >
        <section>
          <Container>
            <Text
              markup={`h1`}
              content={[`Next.js`]}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text
              markup={`h2`}
              content={[`What parts of Next.js are being used?`]}
            />
            <Text
              content={[`Next.js is very flexible and has a lot of features. As I go through and implement them, I'll talk a bit about each one. It is actually really easy to set up and they have pretty good documentation for a basic setup.`]}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={[`Static Site Generation`]}
            />
            <Text
              content={[`With the latest Next.js this comes built in with almost zero configuration so long as you have a simple static site. Simply build then export your project using their built in commands and Next.js creates an /out/ for you with your static site.`]}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={[`Next Link`]}
            />
            <Text
              content={[`A wrapper for your anchor tags that will preload the destination so when the link is clicked the next "page load" is instant. Really easy to use built in functionality of Next.js using their next/link module.`]}
            />
          </Container>
        </section>
     </Layout>
    </>
  );
};

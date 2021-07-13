import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';

export default function Index() {

  return (
    <>
     <Layout 
       title={`Home`}
      >
        <section>
          <Container>
            <Text 
              content={`Taran Pierce`} 
              markup={`h1`}
            />
            <Text
              content={`Welcome to taranitup.com`}
              markup={`h2`}
            />
          </Container>
        </section>
       <section>
         <Container>
          <Text
            content={`Just a place for me to do some messing around with stuff. This site is hooked up to various technologies and I will explain how each of them are hooked up.`}
          />
          <Text
            content={`Right now this site is very simple but is using nodejs running Nextjs to leverage their Static Site Generation. I'm using services from AWS like CodeBuild to grab the repo and build the application. Moving the artifact it creates to an S3 bucket where I have the DNS managed from Route 53.`}
          />
          <Text
            content={`Also hooked up GTM using react-gtm-module. Really easy to use and setup.`}
          />
          <Text
            content={`On merges to master the code is automatically built and deployed to update the live site.`}
          />
          <Text
            content={`Also have Cloud Front set up in order to get an SSL. Need to customize the caching to work properly now.`}
          />
          <Text
            content={`Added a command to CodeBuild to automatically queue up an invalidation task for Cloud Front.`}
          />
          <Text
            content={`I will be hooking up more things as I get time!`}
          />
         </Container>
       </section>
     </Layout>
    </>
  );
};

import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';
import AppImage from '../components/image';

export default function Index() {

  return (
    <>
     <Layout 
       title={`Home`}
      >
        <section>
          <Container>
            <div style={{
              display: 'flex',
              flexDirection: 'column-reverse',
            }}>
              <div style={{
              }}>
                <Text
                  markup={`h1`}
                  content={`Taran Pierce`} 
                />
                <Text
                  markup={`h2`}
                  content={`Welcome to taranitup.com`}
                />
              </div>
              <div>
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
              </div>
            </div>
          </Container>
        </section>
       <section>
         <Container>
          <Text
            content={`Just a place for me to do some messing around with stuff. This site is hooked up to various technologies and I will explain how each of them are hooked up.`}
          />
          <Text
            content={`Right now this site is very simple but is using Nodejs and using the Nextjs react framework to leverage their Static Site Generation. I'm using services from AWS like CodeBuild to grab the repo and build the application. Moving the artifact it creates to an S3 bucket where I have the DNS managed from Route 53.`}
          />
          <Text
            content={`For analytic tracking I'm using GTM implemented with react-gtm-module. Really easy to use and setup.`}
          />
          <Text
            content={`On merged pull request to master the code is automatically built using CodeBuild and the artifact it creates is moved to an S3 bucket.`}
          />
          <Text
            content={`Cloud Front is set up in order to get an SSL and take advantage of caching.`}
          />
          <Text
            content={`Added a command to CodeBuild to automatically queue up a cache invalidation task for Cloud Front.`}
          />
          <Text
            content={`Now hooked up to Cloudinary to get media from a CDN.`}
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

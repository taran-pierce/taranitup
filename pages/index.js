import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';

export default function Index() {
  return (
    <>
     <Layout>
       <Text 
         content={`Taran Pierce`} 
         markup={`h1`}
        />
        <Text
          content={`Welcome to taranitup.com`}
          markup={`h2`}
        />
        <Text
          content={`Just a place for me to do some messing around with stuff. This site is hooked up to various technologies and I will explain how each of them are hooked up.`}
        />
        <Text
          content={`Right now this site is using Static Site Generation from Next.js.`}
        />
     </Layout>
    </>
  );
};

import React from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';

export default function Cloudinary() {

  return (
    <>
     <Layout 
       title={`Cloudinary`}
      >
        <section>
          <Container>
            <Text
              markup={`h1`}
              content={`Cloudinary`} 
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text
              markup={`h2`}
              content={`CDN`}
            />
            <Text
              content={`Store, transform, optimize and deliver all your media assets.`}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={`Image hosting`}
            />
            <Text
              content={`The entire one image that is on the site so far is coming from Cloudinary's CDN.`}
            />
          </Container>
        </section>
        <section>
          <Container>
            <Text 
              markup={`h3`}
              content={`Image Manipulation`}
            />
            <Text
              content={`The image is much larger and I am using Cloudinary to scale the image down to 280px by 280px. Then another transformation to crop and focus more on the face of the image. As well as delivering the nextgen format of the image.`}
            />
          </Container>
        </section>
     </Layout>
    </>
  );
};

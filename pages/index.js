import React, { 
  useEffect, 
  useState,
 } from 'react';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';
import AppImage from '../components/image';
import RichText from '../components/richText';

const contentful = require('contentful');

function Index({
  componentData,
}) {
  const [
    title,
    pageComponents,
    route,
  ] = componentData;

  const [isMobile, setIsMobile] = useState(false);

  const getWindowSize = () => {
    const { innerWidth } = window || {};

    return innerWidth;
  };

  // find initial viewport size
  useEffect(() => {
    setIsMobile(getWindowSize() < 768);
  }, []);

  // watch for window resize and reset isMobile
  useEffect(() => {
    let timeout;

    // add resize listner
    window.addEventListener('resize', (e) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        setIsMobile(getWindowSize() < 768);
      });
    }, false);
  }, []);

  return (
    <>
      <Layout 
        title={title.pageTitle}
        pathname={route.pathname}  
      >
        <section>
          <Container>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column-reverse' : 'row',
              alignItems: 'center',
            }}>
              <div style={{
                width: isMobile ? 'auto' : '50%',
              }}>
                <Text
                  markup={`h1`}
                  content={[`Taran Pierce`]} 
                />
                <Text
                  markup={`h2`}
                  content={[`Welcome to taranitup.com`]}
                />
                <ul>
                  <li>
                    <a href={`https://www.linkedin.com/in/taran-pierce-4b6b5721/`} rel={`noopener`} target={`_blank`}>LinkedIn</a>
                  </li>
                  <li>
                    <a href={`https://github.com/taran-pierce`} rel={`noopener`} target={`_blank`}>GitHub</a>
                  </li>
                </ul>
              </div>
              <div style={{
                width: isMobile ? 'auto' : '50%',
              }}>
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
        {pageComponents.components.map((component) => {
          const {
            fields,
            sys,
          } = component || {};

          const {
            bodyCopy,
          } = fields || {};

          return (
            <section key={sys.id}>
              <Container>
                {bodyCopy.content.map((copy, index) => {
                  return (
                    <RichText copy={copy} key={`${copy}-${index}`} />
                  );
                })}
              </Container>
            </section>
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

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layouts';
import Text from '../components/text';
import Container from '../components/container';
import AppImage from '../components/image';
import Block from '../components/block';

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
                  content={`Taran Pierce`} 
                />
                <Text
                  markup={`h2`}
                  content={`Welcome to taranitup.com`}
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
        <section>
          <Container>
            {pageComponents.components.map(component => {
              // TODO do checks in here and pass nodeType to markup
              const {
                fields,
              } = component || {};

              const {
                bodyCopy,
              } = fields || {};

              return (
                <>
                  {bodyCopy.content.map(copy => <Text content={copy.content[0].value} />)}
                </>
              );
            })}
          </Container>
        </section>
        <section>
          <Container>
            <Block>
              <Text
                markup={`h3`}
                content={`How does it work?`}
              />
              <Text
                content={`You can take a look at the About page, don't worry it isn't about me it is about what technologies I am using to create this site. Just click the link below, it shouldn' take long to load the next page cause I've already done it while you were reading this.`}
              />
              <Text
                content={`Don't worry, you will learn more about how that works on the about page if you want to find out. On the about page you will find a general overview of each different feature and some links to their sites so you can check them out or use them yourself.`}
              />
              <Text
                content={`Despite requiring a credit card just to signup for AWS services, everything on here is either completely free or a free service so long as you stay under certain limits. Limits that are quite easy to stay under unless you are getting some major traffic to your site.`}
              />
              <Link href={`/about`}>
                <a>About how the site works</a>
              </Link>
            </Block>
          </Container>
        </section>
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
      // console.log(entry);

      Object.keys(entry.fields).forEach(field => field != 'metaData' ? componentData.push({ [field]: entry.fields[field]}) : null);
    })
    .catch(console.error);

  const pathname = '/';

  return {
    pathname,
    componentData,
  };
};

export default Index;

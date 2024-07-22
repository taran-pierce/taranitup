import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

import CssBaseline from '@mui/material/CssBaseline';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" charSet="UTF-8">
        <Head />
        <body>
          <CssBaseline />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;

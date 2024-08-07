import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US" charSet="UTF-8">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;

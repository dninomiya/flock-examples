import { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/favicon';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Favicon />
        <meta
          name="google-site-verification"
          content="w0enkzfN5KeN1Y3qNDYvPMkD1RkrOyB3JIgdewTO-TI"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

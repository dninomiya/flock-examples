import { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/favicon';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

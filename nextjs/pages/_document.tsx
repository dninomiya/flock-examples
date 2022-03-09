import { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/favicon';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Favicon />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_SEARCH_CONSOLE_KEY}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

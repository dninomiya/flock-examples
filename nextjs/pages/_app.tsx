import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer';
import Header from '../components/header';
import { AuthProvider } from '../context/auth';
import { Site } from '../lib/site';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Flock Codes"
        twitter={{ cardType: 'summary_large_image' }}
        description="Webアプリの実装例"
        openGraph={{
          type: 'website',
          images: [
            {
              url: `${Site.origin}/images/ogp.png`,
            },
          ],
        }}
        defaultTitle={Site.title}
      />
      <NextNProgress
        showOnShallow={false}
        stopDelayMs={0}
        options={{ showSpinner: false }}
      />
      <AuthProvider>
        <ThemeProvider attribute="class" enableColorScheme={false}>
          <div className="bg-gray-50 dark:text-gray-100 text-gray-800 dark:bg-slate-900 min-h-screen">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </ThemeProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default MyApp;

import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { globals } from '../globals';
import { Header } from '../components/Header';
import '../styles/base.css';
import LayoutWrapper from '../components/LayoutWrapper';
import { ThemeProvider } from 'next-themes';


const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider attribute="class">
    <div className="container">
      <Head>
        {globals.googleAnalyticsId && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}></script>
        )}
        {globals.googleAnalyticsId && (
          <script dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
          }}></script>
        )}
      </Head>
      <Header />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default App;

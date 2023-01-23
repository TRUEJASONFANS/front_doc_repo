import React from 'react';
import Head from 'next/head';
import { globals } from '../globals';
import { Header } from '../components/Header';
import '../styles/base.css';
import LayoutWrapper from '../components/LayoutWrapper';
import { ThemeProvider } from 'next-themes';
import '@/css/tailwind.css'
import '@/css/prism.css'

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider attribute="class">
    <div className="container mx-auto">
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
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </div>
    </ThemeProvider>
  );
};

export default App;

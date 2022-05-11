import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';








export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="BrickDao" />
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
       

          
                            
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { LogoJsonLd } from 'next-seo';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout(props) {
  const { config, children } = props;

  if (!config) {
    console.error('Missing config');
    return <div>Missing config</div>;
  }

  const { title, mainNavigation, partnerLogos, logo, url, footerText } = config;
  const logoUrl = logo && logo.asset && logo.asset.url;

  const analyticsCode = 'G-0647Z46SLK';

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      </Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsCode}`}></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${analyticsCode}');
      `}</script>
      <div className={styles.container}>
        <Header title={title} navItems={mainNavigation} logo={logo} />
        <div className="content">{children}</div>
        <Footer partnerLogos={partnerLogos} text={footerText} />
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    partnerLogos: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
    footerText: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Layout;

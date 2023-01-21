import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import client from '../client';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang) => {
      return { ...initialProps, lang };
    });
  }

  render() {
    return (
      <Html lang={this.props.lang || 'nl-NL'}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://use.typekit.net/zdz7wwk.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="icon" href="/static/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

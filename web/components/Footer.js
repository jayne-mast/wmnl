import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styles from './Footer.module.css';
import SimpleBlockContent from './SimpleBlockContent';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const builder = imageUrlBuilder(client);

function Footer(props) {
  const { partnerLogos, text, router } = props;
  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.items}>
          {partnerLogos &&
            partnerLogos.map(({ _key, link, asset, name }) => (
              <li key={_key} className={styles.item}>
                <a href={link} target="_blank">
                  <img src={builder.image(asset).auto('format').height(60).url()} alt={name} />
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <div className={styles.text}>
        {text && <SimpleBlockContent blocks={text} />}
        <p>
          Structured content powered by{' '}
          <a href="https://sanity.io" target="_blank">
            Sanity.io
          </a>
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  partnerLogos: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

export default withRouter(Footer);

import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import styles from './ImageColumns.module.css';
import client from '../../client';
import SimpleBlockContent from '../SimpleBlockContent';
import { getColorFromBgColor } from '../../utils';

const builder = imageUrlBuilder(client);

function ImageColumns({ heading, sections, backgroundColor }) {
  const style = {
    backgroundColor,
    color: getColorFromBgColor(backgroundColor),
  };

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        {heading && <h2 className={styles.title}>{heading}</h2>}
        {sections &&
          sections.map(({ heading, text, image, alt }) => (
            <figure className={styles.figure}>
              <img
                src={builder.image(image).auto('format').width(500).url()}
                className={styles.image}
                alt={alt}
              />
              <figcaption className={styles.figcaption}>
                {heading && <h3 className={styles.subtitle}>{heading}</h3>}
                {text && (
                  <div className={styles.text}>
                    <SimpleBlockContent blocks={text} />
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
}

ImageColumns.propTypes = {
  heading: PropTypes.string,
  sections: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.array,
    image: PropTypes.shape({
      asset: PropTypes.shape({
        _ref: PropTypes.string,
      }),
    }),
    alt: PropTypes.string,
  }),
  backgroundColor: PropTypes.string,
};

export default ImageColumns;

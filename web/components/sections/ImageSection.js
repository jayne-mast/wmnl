import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import styles from './ImageSection.module.css';
import client from '../../client';
import SimpleBlockContent from '../SimpleBlockContent';
import { getColorFromBgColor } from '../../utils';

const builder = imageUrlBuilder(client);

function ImageSection(props) {
  const { heading, text, image, alt, imagePosition, backgroundColor } = props;

  if (!image) {
    return null;
  }

  const style = {
    backgroundColor,
    color: getColorFromBgColor(backgroundColor),
  };

  const imagePositionStyle = {
    order: imagePosition === 'left' ? 0 : 1,
  };

  return (
    <div className={styles.root} style={style}>
      <figure className={styles.content}>
        <img
          src={builder.image(image).auto('format').width(2000).url()}
          className={styles.image}
          alt={alt}
          style={imagePositionStyle}
        />
        <figcaption>
          <h2 className={styles.title}>{heading}</h2>
          {text && (
            <div className={styles.text}>
              <SimpleBlockContent blocks={text} />
            </div>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  alt: PropTypes.string,
  tagline: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  backgroundColor: PropTypes.string,
};

export default ImageSection;

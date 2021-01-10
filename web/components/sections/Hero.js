import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import styles from './Hero.module.css';
import client from '../../client';
import SimpleBlockContent from '../SimpleBlockContent';
import { getColorFromBgColor } from '../../utils';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heading, image, alt, text, backgroundColor } = props;

  const style = {
    backgroundColor,
    color: getColorFromBgColor(backgroundColor),
  };

  return (
    <div className={styles.root} style={style}>
      <div className={styles.imageWrapper}>
        <img
          src={builder.image(image).auto('format').width(2000).url()}
          className={styles.image}
          alt={alt}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.text}>{text && <SimpleBlockContent blocks={text} />}</div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
  alt: PropTypes.string,
  text: PropTypes.array,
  backgroundColor: PropTypes.string,
};

export default Hero;

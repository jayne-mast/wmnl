import React from 'react';
import PropTypes from 'prop-types';
import styles from './Iframe.module.css';
import getVideoId from 'get-video-id';

export default function Iframe({ node }) {
  const { url, width, height, title } = node;
  return (
    <iframe
      className={styles.iframe}
      src={url}
      width={width}
      height={height}
      frameBorder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
      title={title}
    />
  );
}

Iframe.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

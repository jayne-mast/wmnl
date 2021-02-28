import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoEmbed.module.css';
import getVideoId from 'get-video-id';

export default function VideoEmbed({ node }) {
  const { url } = node;
  if (!url) {
    return null;
  }
  const { id, service } = getVideoId(url);

  let embedUrl;
  if (service === 'youtube') {
    embedUrl = `https://www.youtube.com/embed/${id}`;
  } else if (service === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${id}`;
  }

  if (!embedUrl) {
    return null;
  }

  return (
    <div className={styles.wrapperWrapper}>
      <div className={styles.wrapper}>
        <iframe
          className={styles.video}
          src={embedUrl}
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        />
      </div>
    </div>
  );
}

VideoEmbed.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

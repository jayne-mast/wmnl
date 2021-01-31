import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';
import { getColorFromBgColor } from '../../utils';
import { propTypes } from '@sanity/block-content-to-react';

function TextSection(props) {
  const { heading, text, backgroundColor, textPosition = 'center' } = props;

  const bgStyle = {
    backgroundColor,
    color: getColorFromBgColor(backgroundColor),
  };

  const style = {};
  const articleStyle = {};

  switch (textPosition) {
    case 'left':
      style['textAlign'] = 'left';
      break;
    case 'right':
      style['textAlign'] = 'right';
      style['justifyContent'] = 'flex-end';
      break;
    case 'center':
      style['textAlign'] = 'center';
      style['justifyContent'] = 'center';
      break;
    case 'full width':
      style['textAlign'] = 'left';
      articleStyle['fontSize'] = '20px';
      articleStyle['maxWidth'] = '100%';
      break;
  }

  return (
    <div style={bgStyle}>
      <div className={styles.root} style={style}>
        <section className={styles.article} style={articleStyle}>
          {heading <h2 className={styles.heading}>{heading}</h2>}
          {text && <SimpleBlockContent blocks={text} />}
        </section>
      </div>
    </div>
  );
}

TextSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  backgroundColor: PropTypes.string,
  textPosition: PropTypes.string,
};

export default TextSection;

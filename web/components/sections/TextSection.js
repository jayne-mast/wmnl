import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';
import { getColorFromBgColor } from '../../utils';
import { propTypes } from '@sanity/block-content-to-react';

function TextSection(props) {
  const { heading, text, backgroundColor } = props;

  const style = {
    backgroundColor,
    color: getColorFromBgColor(backgroundColor),
  };

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <h2 className={styles.heading}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  );
}

TextSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  backgroundColor: PropTypes.string,
};

export default TextSection;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Donorbox.module.css';

function Donorbox({ node }) {
  const { prefill } = node;
  return (
    <>
      <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      <iframe
        allowpaymentrequest=""
        frameborder="0"
        height="900px"
        width="100%"
        name="donorbox"
        scrolling="no"
        seamless="seamless"
        src={`https://donorbox.org/embed/steun-womens-march-nederland${
          prefill ? '?amount=30' : ''
        }`}
        className={styles.box}
      ></iframe>
    </>
  );
}

Donorbox.propTypes = {
  node: PropTypes.shape({
    prefill: PropTypes.number,
  }),
};
export default Donorbox;

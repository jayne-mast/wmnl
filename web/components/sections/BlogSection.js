import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogSection.module.css';
import groq from 'groq';

const blogPostsQuery = groq`
*[_type == "blogPost"]{
  ...
}
`;

function BlogSection(props) {
  const { heading } = props;

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <h2 className={styles.heading}>{heading}</h2>
        Here comes a blog overview
      </section>
    </div>
  );
}

BlogSection.propTypes = {
  heading: PropTypes.string,
};

export default BlogSection;

import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './BlogOverviewSection.module.css';
import groq from 'groq';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { getColorFromBgColor } from '../../utils';

const builder = imageUrlBuilder(client);

function BlogSection({ heading, text, blogs, backgroundColor, itemsToShow = Infinity }) {
  const blogsToRender = blogs.slice(0, itemsToShow);

  const style = {
    backgroundColor,
    color: getColorFromBgColor(backgroundColor),
  };

  return (
    <div className={styles.root} style={style}>
      <section className={styles.article}>
        <h2 className={styles.heading}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        <div className={styles.blogs}>
          {blogsToRender.map(({ description, openGraphImage, slug, title }) => {
            const imgUrl = openGraphImage
              ? builder.image(openGraphImage).width(410).height(250).url()
              : null;

            return (
              <div className={styles.blog}>
                <a href={`/magazine/${slug.current}`} className={styles.blogLink}>
                  {imgUrl && <img src={imgUrl} alt="" className={styles.blogImage} />}
                  <h3 className={styles.blogHeading}>{title}</h3>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

BlogSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.array,
  backgroundColor: PropTypes.string,
  itemsToShow: PropTypes.number,
  blogs: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    openGraphImage: PropTypes.object,
    slug: PropTypes.shape({ current: PropTypes.string }),
    title: PropTypes.string,
    publishAt: PropTypes.number,
  }),
};

export default BlogSection;

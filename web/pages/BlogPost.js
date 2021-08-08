import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import groq from 'groq';
import client from '../client';
import NextSeo from 'next-seo';
import imageUrlBuilder from '@sanity/image-url';
import RenderSections from '../components/RenderSections';

const builder = imageUrlBuilder(client);
const pageQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0]{
  ...,
  content[] {
    ...,
    text[] {
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @->slug
        }
      }
    },
  }
}
`;

class BlogPost extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
    slug: PropTypes.any,
  };

  static async getInitialProps({ query }) {
    const { slug } = query;

    if (!query) {
      console.error('no query');
      return;
    }
    if (slug) {
      return client.fetch(pageQuery, { slug });
    }

    return null;
  }

  render() {
    const {
      title = 'Missing title',
      description,
      openGraphImage,
      content = [],
      config = {},
      slug,
      author,
    } = this.props;

    const openGraphImages = openGraphImage
      ? [
          {
            url: builder.image(openGraphImage).width(800).height(600).url(),
            width: 800,
            height: 600,
            alt: title,
          },
          {
            // Facebook recommended size
            url: builder.image(openGraphImage).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: title,
          },
          {
            // Square 1:1
            url: builder.image(openGraphImage).width(600).height(600).url(),
            width: 600,
            height: 600,
            alt: title,
          },
        ]
      : [];

    return (
      <Layout config={config}>
        <NextSeo
          config={{
            title,
            titleTemplate: `${config.title} | %s`,
            description,
            canonical: config.url && `${config.url}/${slug}`,
            openGraph: {
              images: openGraphImages,
            },
            noindex: false,
          }}
        />
        {content && <RenderSections sections={content} author={author} />}
      </Layout>
    );
  }
}

export default BlogPost;

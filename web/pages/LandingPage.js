import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NextSeo from 'next-seo';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '../components/Layout';
import client from '../client';
import RenderSections from '../components/RenderSections';

const builder = imageUrlBuilder(client);
const pageQuery = groq`
{
  "pageData": *[_type == "route" && slug.current == $slug][0]{
    page-> {
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
	},
	"blogs": *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(_createdAt desc)
}
`;

class LandingPage extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    disallowRobots: PropTypes.bool,
    openGraphImage: PropTypes.object,
    content: PropTypes.array,
    config: PropTypes.object,
    slug: PropTypes.string,
    blogs: PropTypes.array,
  };

  static async getInitialProps({ query }) {
    const { slug } = query;
    if (!query) {
      console.error('no query');
      return;
    }
    return client
      .fetch(pageQuery, { slug })
      .then((res) => ({ ...res.pageData.page, slug, blogs: res.blogs }));

    return null;
  }

  render() {
    const {
      title = 'Missing title',
      description,
      disallowRobots,
      openGraphImage,
      content = [],
      config = {},
      slug,
      blogs,
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
            noindex: disallowRobots,
          }}
        />
        {content && <RenderSections sections={content} blogs={blogs} />}
      </Layout>
    );
  }
}

export default LandingPage;

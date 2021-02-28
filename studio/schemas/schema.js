// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import blogPost from './documents/blogPost';

// Object types
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import backgroundColor from './objects/backgroundColor';
import partnerLogo from './objects/partnerLogo';
import youtube from './objects/youtube';
import vimeo from './objects/vimeo';
import donorbox from './objects/donorbox';
import imageColumnsSection from './objects/imageColumnsSection';
import routeWithChildren from './objects/routeWithChildren';
import iframe from './objects/iframe';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import imageColumns from './objects/imageColumns';
import textSection from './objects/textSection';
import blogOverviewSection from './objects/blogOverviewSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    figure,
    hero,
    imageSection,
    imageColumns,
    imageColumnsSection,
    internalLink,
    link,
    page,
    portableText,
    route,
    routeWithChildren,
    simplePortableText,
    siteConfig,
    textSection,
    blogOverviewSection,
    blogPost,
    backgroundColor,
    partnerLogo,
    youtube,
    vimeo,
    donorbox,
    iframe
  ])
});

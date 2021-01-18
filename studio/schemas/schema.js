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
import routeWithChildren from './objects/routeWithChildren';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import textSection from './objects/textSection';
import blogSection from './objects/blogSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    page,
    portableText,
    route,
    routeWithChildren,
    simplePortableText,
    siteConfig,
    textSection,
    blogSection,
    blogPost,
    backgroundColor,
    partnerLogo,
    youtube,
    vimeo
  ])
});

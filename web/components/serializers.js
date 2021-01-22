import Figure from './Figure';
import VideoEmbed from './VideoEmbed';

const serializers = {
  types: {
    figure: Figure,
    youtube: VideoEmbed,
    vimeo: VideoEmbed,
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
  },
};

export default serializers;

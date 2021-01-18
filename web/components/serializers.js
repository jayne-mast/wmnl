import Figure from './Figure';
import VideoEmbed from './VideoEmbed';

const serializers = {
  types: {
    figure: Figure,
    youtube: VideoEmbed,
    vimeo: VideoEmbed,
  },
};

export default serializers;

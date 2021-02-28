import React from 'react';
import Donorbox from './Donorbox';
import Figure from './Figure';
import VideoEmbed from './VideoEmbed';
import Iframe from './Iframe';

const serializers = {
  types: {
    figure: Figure,
    youtube: VideoEmbed,
    vimeo: VideoEmbed,
    iframe: Iframe,
    donorbox: Donorbox,
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      if (!slug.current) {
        return children;
      }
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
  },
};

export default serializers;

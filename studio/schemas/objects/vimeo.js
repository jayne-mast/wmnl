import React from 'react';
import getVideoId from 'get-video-id';
import Vimeo from 'react-vimeo';

const Preview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  const { id } = getVideoId(url);
  return <Vimeo videoId={id} />;
};

export default {
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo video URL',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
};

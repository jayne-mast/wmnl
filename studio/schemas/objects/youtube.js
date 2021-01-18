import React from 'react';
import getVideoId from 'get-video-id';
import YouTube from 'react-youtube';

const Preview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  const { id } = getVideoId(url);
  return <YouTube videoId={id} />;
};

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
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

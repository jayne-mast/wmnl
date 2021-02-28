import React from 'react';

const Preview = ({ value }) => {
  const { url, width, height, title } = value;
  return (
    <iframe
      src={url}
      width={width}
      height={height}
      frameBorder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
      title={title}
      style={{ marginBottom: '16px' }}
    ></iframe>
  );
};

export default {
  name: 'iframe',
  type: 'object',
  title: 'Iframe Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Iframe URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title (for screen readers)'
    },
    {
      name: 'width',
      type: 'number',
      title: 'width'
    },
    {
      name: 'height',
      type: 'number',
      title: 'height'
    }
  ],
  preview: {
    select: {
      url: 'url',
      width: 'width',
      height: 'height',
      title: 'title'
    },
    component: Preview
  }
};

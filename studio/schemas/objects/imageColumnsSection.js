export default {
  type: 'object',
  name: 'imageColumnsSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.'
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'image'
    },
    prepare({ heading = 'No title', media }) {
      return {
        title: heading,
        media
      };
    }
  }
};

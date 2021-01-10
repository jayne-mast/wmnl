export default {
  type: 'object',
  name: 'imageSection',
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
    },
    {
      name: 'imagePosition',
      type: 'string',
      title: 'Image position',
      options: {
        list: ['left', 'right']
      }
    },
    {
      name: 'backgroundColor',
      type: 'backgroundColor',
      title: 'Background color'
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image'
    },
    prepare({ heading = 'No title', media }) {
      return {
        title: heading,
        subtitle: 'Image section',
        media
      };
    }
  }
};

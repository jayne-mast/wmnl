export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
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
      name: 'backgroundColor',
      type: 'backgroundColor',
      title: 'Background color'
    },
    {
      name: 'textPosition',
      type: 'string',
      title: 'Text position',
      options: {
        list: ['center', 'left', 'right', 'full width']
      }
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading = 'No title' }) {
      return {
        title: heading,
        subtitle: 'Text section'
      };
    }
  }
};

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

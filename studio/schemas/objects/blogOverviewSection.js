export default {
  type: 'object',
  name: 'blogOverviewSection',
  title: 'Magazine overview',
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
      name: 'itemsToShow',
      type: 'number',
      title: 'Items to show',
      description: 'Leave empty to show all magazine items'
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
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Magazine overview'
      };
    }
  }
};

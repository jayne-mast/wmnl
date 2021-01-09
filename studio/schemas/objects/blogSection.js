export default {
  type: 'object',
  name: 'blogSection',
  title: 'Blog overview',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Blog section'
      }
    }
  }
}

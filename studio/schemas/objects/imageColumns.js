export default {
  type: 'object',
  name: 'imageColumns',
  title: 'Image with text, two columns',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Image with text',
      of: [{ type: 'imageColumnsSection' }],
      validation: Rule => Rule.required()
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
      media: 'sections[0].image',
      sections: 'sections'
    },
    prepare({ heading, media, sections }) {
      const numberOfSections = sections ? sections.length : 0;
      return {
        title: `${heading ? `${heading} (` : ''}${numberOfSections} ${
          numberOfSections === 1 ? 'section' : 'sections'
        }${heading ? ')' : ''}`,
        subtitle: 'Image with text, two columns',
        media
      };
    }
  }
};

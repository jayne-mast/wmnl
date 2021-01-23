import { MdLibraryBooks } from 'react-icons/md';

export default {
  name: 'blogPost',
  type: 'document',
  title: 'Magazine items',
  icon: MdLibraryBooks,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This will be what comes after /magazine/ in the url',
      validation: Rule => Rule.required(),
      options: {
        source: 'title'
      }
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string'
    },
    {
      title: 'Publish(ed) at',
      name: 'publishAt',
      type: 'datetime',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{ type: 'hero' }, { type: 'imageSection' }, { type: 'textSection' }]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'This description populates meta-tags on the webpage, used in sharing previews and Google search results.',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'openGraphImage'
    },
    prepare({ title = 'No title', slug, media }) {
      return {
        title,
        subtitle: slug && '/magazine/' + slug,
        media
      };
    }
  }
};

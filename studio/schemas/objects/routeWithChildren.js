export default {
  title: 'Route with children',
  name: 'routeWithChildren',
  type: 'object',
  fields: [
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'route' }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Children',
      name: 'children',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'route' } }]
    }
  ],
  preview: {
    select: {
      title: 'page.page.title',
      slug: 'page.slug.current',
      children: 'children'
    },
    prepare({ title = 'No title', slug, children }) {
      const subtitle = slug === '/' ? '/' : `/${slug}`;
      return {
        title,
        subtitle: `${subtitle} (${children.length} ${children.length === 1 ? 'child' : 'children'})`
      };
    }
  }
};

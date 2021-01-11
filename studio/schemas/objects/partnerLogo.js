export default {
  name: 'partnerLogo',
  title: 'Partner logo',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'name'
    }
  }
};

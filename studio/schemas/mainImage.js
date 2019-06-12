export default {
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Image title',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
}

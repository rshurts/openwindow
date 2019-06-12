export default {
  name: 'quotes',
  title: 'Quotes',
  type: 'object',
  fields: [
    {
      name: 'sideImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'sideQuotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}

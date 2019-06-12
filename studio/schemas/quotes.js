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
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      quotes: 'sideQuotes',
      image: 'sideImage',
    },
    prepare(data) {
      return {
        ...data,
        title: data.quotes && data.quotes.join(', '),
        media: data.image,
      }
    },
  },
}

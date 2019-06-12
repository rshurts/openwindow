export default {
  name: 'slideshow',
  title: 'Slideshow',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'slides',
    },
    prepare(data) {
      return {
        ...data,
        title: data.title,
        media: data.images && data.images[0],
      }
    },
  },
}

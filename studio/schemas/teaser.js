export default {
  name: 'teaser',
  title: 'Teaser',
  type: 'object',
  fields: [
    {
      name: 'verticalImage',
      title: 'Vertical image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'horizontalImage',
      title: 'Horizontal image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'link',
      image: 'horizontalImage',
    },
    prepare(data) {
      return {
        ...data,
        title: data.title,
        media: data.image,
      }
    },
  },
}

export default {
  name: 'postAuthor',
  title: 'Post author',
  type: 'object',
  fields: [
    {
      name: 'staff',
      title: 'Staff',
      type: 'reference',
      to: { type: 'staff' },
    },
  ],
  preview: {
    select: {
      name: 'staff.name',
      title: 'staff.title',
      image: 'staff.headshot',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name,
        subtitle: data.title && data.title.join(', '),
        media: data.image,
      }
    },
  },
}

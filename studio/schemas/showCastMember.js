export default {
  name: 'showCastMember',
  title: 'Show Cast Member',
  type: 'object',
  fields: [
    {
      name: 'castMember',
      title: 'Cast Member',
      type: 'reference',
      to: { type: 'castMember' },
    },
  ],
  preview: {
    select: {
      name: 'castMember.name',
      image: 'castMember.headshot',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name,
        media: data.image,
      }
    },
  },
}

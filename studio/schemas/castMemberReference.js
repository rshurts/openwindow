export default {
  name: 'castMemberReference',
  title: 'Cast Member Reference',
  type: 'object',
  fields: [
    {
      name: 'castMember',
      title: 'Cast Member',
      type: 'reference',
      to: { type: 'castMember' },
    },
    {
      name: 'role',
      title: 'Role(s)',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      name: 'castMember.name',
      image: 'castMember.headshot',
      role: 'role',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name,
        subtitle: data.role && data.role.join(', '),
        media: data.image,
      }
    },
  },
}

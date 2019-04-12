export default {
  name: 'cast',
  title: 'Cast',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Full name of the person to display',
      type: 'string',
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'blockText',
      // type: 'array',
      // of: [
      // {
      // title: 'Block',
      // type: 'block',
      // styles: [{ title: 'Normal', value: 'normal' }],
      // lists: [],
      // decorators: [
      // { title: 'Strong', value: 'strong' },
      // { title: 'Emphasis', value: 'em' },
      // ],
      // },
      // ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      headshot: 'headshot',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name,
        media: data.headshot,
      }
    },
  },
}

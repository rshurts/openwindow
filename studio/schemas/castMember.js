import { FaMask } from 'react-icons/fa'

export default {
  name: 'castMember',
  title: 'Cast Member',
  type: 'document',
  icon: FaMask,
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

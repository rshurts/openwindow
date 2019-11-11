import { FaIdBadge } from 'react-icons/fa'

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  liveEdit: false,
  icon: FaIdBadge,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Full name of the person to display',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Path used in the url',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Job title(s)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    // TODO email
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
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
      headshot: 'headshot',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name,
        subtitle: data.title && data.title.join('/'),
        media: data.headshot,
      }
    },
  },
}

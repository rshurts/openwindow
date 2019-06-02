export default {
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is the path used to identify the post in the URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
    },
    {
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: { type: 'season' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      season: 'season',
      image: 'mainImage',
    },
    prepare({ title = 'No title', season, image }) {
      return {
        title,
        subtitle: `${season.startYear} - ${season.endYear}`,
        media: image,
      }
    },
  },
}

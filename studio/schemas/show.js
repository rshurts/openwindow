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
      type: 'showSeason',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'cast',
      title: 'Cast',
      type: 'array',
      of: [{ type: 'showCastMember' }],
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
      const subtitle =
        season && season.startYear && season.endYear
          ? `${season.startYear} - ${season.endYear}`
          : ''
      return {
        title,
        subtitle,
        media: image,
      }
    },
  },
}

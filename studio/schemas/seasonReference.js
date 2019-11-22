export default {
  name: 'seasonReference',
  title: 'Season Reference',
  type: 'object',
  fields: [
    {
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: { type: 'season' },
    },
  ],
  preview: {
    select: {
      startYear: 'season.startYear',
      endYear: 'season.endYear',
    },
    prepare(data) {
      const title =
        data.startYear && data.endYear
          ? `${data.startYear} - ${data.endYear}`
          : ''
      return {
        ...data,
        title,
      }
    },
  },
}

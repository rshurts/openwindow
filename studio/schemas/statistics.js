export default {
  name: 'statistics',
  title: 'Statistics',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [{ type: 'statistic' }],
    },
  ],
}

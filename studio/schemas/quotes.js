export default {
  name: 'quotes',
  title: 'Quotes',
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
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [{ type: 'quote' }],
    },
  ],
}

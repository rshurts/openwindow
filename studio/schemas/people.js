export default {
  name: 'people',
  title: 'People',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'staffReference' }],
    },
  ],
}

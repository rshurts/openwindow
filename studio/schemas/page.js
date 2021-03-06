export default {
  name: 'page',
  title: 'Page',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}

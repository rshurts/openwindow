export default {
  name: 'showcase',
  title: 'Showcase',
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
      name: 'vimeo',
      title: 'Vimeo',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http'],
        }),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}

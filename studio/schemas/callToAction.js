export default {
  name: 'callToAction',
  title: 'Call to Action',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish', 'delete'],
  fieldsets: [{ name: 'buttonLink', title: 'Call to Action Button' }],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'button',
      title: 'Text',
      type: 'string',
      fieldset: 'buttonLink',
    },
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      fieldset: 'buttonLink',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      name: 'blank',
      title: 'Open in new tab',
      type: 'boolean',
      fieldset: 'buttonLink',
    },
  ],
}

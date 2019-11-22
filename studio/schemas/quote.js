export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'quoteImage',
      title: 'Quote Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'quoteText',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'quoteAuthor',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'quoteSource',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'quoteURL',
      title: 'Link',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'quoteText',
      image: 'quoteImage',
    },
    prepare(data) {
      return {
        ...data,
        title:
          data.title.length < 40
            ? data.title
            : `${data.title.slice(0, 40).trim()}…`,
        media: data.image,
      }
    },
  },
}

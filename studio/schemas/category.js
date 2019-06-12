import { FaTag } from 'react-icons/fa'

export default {
  name: 'category',
  title: 'Category',
  icon: FaTag,
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}

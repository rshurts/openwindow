import { FaChartBar } from 'react-icons/fa'

export default {
  name: 'statistic',
  title: 'Statistic',
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string',
    },
    {
      name: 'units',
      title: 'Units',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      number: 'number',
      units: 'units',
    },
    prepare(data) {
      return {
        ...data,
        title: `${data.number} ${data.units}`,
        media: FaChartBar,
      }
    },
  },
}

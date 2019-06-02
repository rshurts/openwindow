import { FaCalendar } from 'react-icons/fa'

export default {
  name: 'season',
  title: 'Season',
  icon: FaCalendar,
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'number',
    },
  ],
  preview: {
    select: {
      startYear: 'startYear',
      endYear: 'endYear',
    },
    prepare({ startYear, endYear }) {
      return {
        title: `${startYear} - ${endYear}`,
      }
    },
  },
}

import S from '@sanity/desk-tool/structure-builder'
import { FaIdBadge } from 'react-icons/fa'

const staff = S.listItem()
  .title('Staff')
  .icon(FaIdBadge)
  .schemaType('staff')
  .child(S.documentTypeList('staff').title('Staff'))

export default staff

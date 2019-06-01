import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness } from 'react-icons/md'

const companyInfo = S.listItem()
  .title('Company Info')
  .icon(MdBusiness)
  .child(
    S.editor()
      .id('companyInfo')
      .schemaType('companyInfo')
      .documentId('companyInfo')
  )

export default companyInfo

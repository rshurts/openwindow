import S from '@sanity/desk-tool/structure-builder'
import { FaInfo } from 'react-icons/fa'

const companyInfo = S.listItem()
  .title('Company Info')
  .icon(FaInfo)
  .child(
    S.editor()
      .id('companyInfo')
      .schemaType('companyInfo')
      .documentId('companyInfo')
  )

export default companyInfo

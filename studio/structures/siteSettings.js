import S from '@sanity/desk-tool/structure-builder'
import { FaCog } from 'react-icons/fa'

const siteSettings = S.listItem()
  .title('Site Settings')
  .icon(FaCog)
  .child(
    S.editor()
      .id('siteSettings')
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )

export default siteSettings

import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'

const siteSettings = S.listItem()
  .title('Site Settings')
  .icon(MdSettings)
  .child(
    S.editor()
      .id('siteSettings')
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )

export default siteSettings

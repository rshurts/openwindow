import S from '@sanity/desk-tool/structure-builder'
import { FaClipboardList, FaCompass } from 'react-icons/fa'

const mission = S.listItem()
  .title('Mission & Vision')
  .icon(FaCompass)
  .child(
    S.editor()
      .id('missionPage')
      .schemaType('page')
      .documentId('mission')
  )

const about = S.listItem()
  .title('About')
  .icon(FaClipboardList)
  .child(
    S.list()
      .title('About Pages')
      .items([mission])
  )

export default about

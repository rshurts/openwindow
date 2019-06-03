import S from '@sanity/desk-tool/structure-builder'
import { FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const location = S.listItem()
  .title('Location & Hours')
  .icon(FaMapMarkedAlt)
  .child(
    S.editor()
      .id('locationPage')
      .schemaType('page')
      .documentId('location')
  )

const contact = S.listItem()
  .title('Contact')
  .icon(FaEnvelope)
  .child(
    S.list()
      .title('Contact Pages')
      .items([location])
  )

export default contact

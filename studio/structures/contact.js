import S from '@sanity/desk-tool/structure-builder'
import { FaEnvelopeOpen, FaMapMarkedAlt } from 'react-icons/fa'

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
  .icon(FaEnvelopeOpen)
  .child(
    S.list()
      .title('Contact Pages')
      .items([location])
  )

export default contact

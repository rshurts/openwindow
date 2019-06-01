import S from '@sanity/desk-tool/structure-builder'
import { FaHandHoldingUsd, FaHandsHelping, FaLifeRing } from 'react-icons/fa'

const donate = S.listItem()
  .title('Donate')
  .icon(FaHandHoldingUsd)
  .child(
    S.editor()
      .id('donatePage')
      .schemaType('page')
      .documentId('donate')
  )

const volunteer = S.listItem()
  .title('Volunteer')
  .icon(FaHandsHelping)
  .child(
    S.editor()
      .id('volunteerPage')
      .schemaType('page')
      .documentId('volunteer')
  )

const support = S.listItem()
  .title('Support')
  .icon(FaLifeRing)
  .child(
    S.list()
      .title('Support Pages')
      .items([donate, volunteer])
  )

export default support

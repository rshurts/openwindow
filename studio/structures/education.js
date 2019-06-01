import S from '@sanity/desk-tool/structure-builder'
import { FaChild, FaGraduationCap, FaHammer } from 'react-icons/fa'

const youthDrama = S.listItem()
  .title('Youth Drama')
  .icon(FaChild)
  .child(
    S.editor()
      .id('youthDramaPage')
      .schemaType('page')
      .documentId('youthDrama')
  )

const workshops = S.listItem()
  .title('Workshops')
  .icon(FaHammer)
  .child(
    S.editor()
      .id('workshopsPage')
      .schemaType('page')
      .documentId('workshops')
  )

const education = S.listItem()
  .title('Education')
  .icon(FaGraduationCap)
  .child(
    S.list()
      .title('Education Pages')
      .items([youthDrama, workshops])
  )

export default education

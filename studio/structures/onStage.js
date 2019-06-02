import S from '@sanity/desk-tool/structure-builder'
import { FaCalendarAlt, FaTheaterMasks, FaUser } from 'react-icons/fa'

const castMember = S.listItem()
  .title('Cast Member')
  .icon(FaUser)
  .schemaType('castMember')
  .child(S.documentTypeList('castMember').title('Cast Members'))

const season = S.listItem()
  .title('Season')
  .icon(FaCalendarAlt)
  .schemaType('season')
  .child(S.documentTypeList('season').title('Seasons'))

const onStage = S.listItem()
  .title('On Stage')
  .id('onStage')
  .icon(FaTheaterMasks)
  .child(
    S.list()
      .title('On Stage')
      .items([castMember, season])
  )

export default onStage

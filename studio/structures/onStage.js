import S from '@sanity/desk-tool/structure-builder'
import { FaCalendarAlt, FaMask, FaTheaterMasks } from 'react-icons/fa'

const castMember = S.listItem()
  .title('Cast Members')
  .icon(FaMask)
  .schemaType('castMember')
  .child(S.documentTypeList('castMember').title('Cast Members'))

const season = S.listItem()
  .title('Seasons')
  .icon(FaCalendarAlt)
  .schemaType('season')
  .child(S.documentTypeList('season').title('Seasons'))

const show = S.listItem()
  .title('Shows')
  .icon(FaTheaterMasks)
  .schemaType('show')
  .child(S.documentTypeList('show').title('Shows'))

const onStage = S.listItem()
  .title('On Stage')
  .id('onStage')
  .icon(FaTheaterMasks)
  .child(
    S.list()
      .title('On Stage')
      .items([season, show, castMember])
  )

export default onStage

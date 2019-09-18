import S from '@sanity/desk-tool/structure-builder'
import {
  FaChartPie,
  FaGrinStars,
  FaHandsHelping,
  FaInfoCircle,
  FaPlane,
  FaStar,
  FaQuoteLeft,
} from 'react-icons/fa'

const hero = S.listItem()
  .title('Hero')
  .icon(FaStar)
  .child(
    S.editor()
      .id('landingHero')
      .schemaType('page')
      .documentId('landingHero')
  )

const summary = S.listItem()
  .title('Summary')
  .icon(FaInfoCircle)
  .child(
    S.editor()
      .id('landingSummary')
      .schemaType('page')
      .documentId('landingSummary')
  )

const quotes = S.listItem()
  .title('Quotes')
  .icon(FaQuoteLeft)
  .child(
    S.editor()
      .id('landingQuotes')
      .schemaType('page')
      .documentId('landingQuotes')
  )

const people = S.listItem()
  .title('People')
  .icon(FaGrinStars)
  .child(
    S.editor()
      .id('landingPeople')
      .schemaType('page')
      .documentId('landingPeople')
  )

const statistics = S.listItem()
  .title('Statistics')
  .icon(FaChartPie)
  .child(
    S.editor()
      .id('landingStatistics')
      .schemaType('page')
      .documentId('landingStatistics')
  )

const help = S.listItem()
  .title('Help')
  .icon(FaHandsHelping)
  .child(
    S.editor()
      .id('landingHelp')
      .schemaType('page')
      .documentId('landingHelp')
  )

const landingPage = S.listItem()
  .title('Landing Page')
  .icon(FaPlane)
  .child(
    S.list()
      .title('Landing Page')
      .items([hero, summary, quotes, people, statistics, help])
  )

export default landingPage

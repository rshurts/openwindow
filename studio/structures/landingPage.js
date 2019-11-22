import S from '@sanity/desk-tool/structure-builder'
import {
  FaChartPie,
  FaGrinStars,
  // FaHandsHelping,
  FaPlane,
  FaStar,
  FaQuoteLeft,
  FaBullhorn,
  // FaHashtag,
} from 'react-icons/fa'

const callToAction = S.listItem()
  .title('Call to Action')
  .icon(FaBullhorn)
  .child(
    S.editor()
      .id('landingCallToAction')
      .schemaType('callToAction')
      .documentId('landingCallToAction')
  )

const showcase = S.listItem()
  .title('Showcase')
  .icon(FaStar)
  .child(
    S.editor()
      .id('landingShowcase')
      .schemaType('showcase')
      .documentId('landingShowcase')
  )

const people = S.listItem()
  .title('People')
  .icon(FaGrinStars)
  .child(
    S.editor()
      .id('landingPeople')
      .schemaType('people')
      .documentId('landingPeople')
  )

const quotes = S.listItem()
  .title('Quotes')
  .icon(FaQuoteLeft)
  .child(
    S.editor()
      .id('landingQuotes')
      .schemaType('quotes')
      .documentId('landingQuotes')
  )

const statistics = S.listItem()
  .title('Statistics')
  .icon(FaChartPie)
  .child(
    S.editor()
      .id('landingStatistics')
      .schemaType('statistics')
      .documentId('landingStatistics')
  )

// TODO Future feature for adding a google, facebook, or yelp review.
// TODO Future feature for instagram gallery.
// TODO Future feature for social network links (provided in company info.)
// const connect = S.listItem()
//   .title('Connect')
//   .icon(FaHashtag)
//   .child(
//     S.editor()
//       .id('landingConnect')
//       .schemaType('page')
//       .documentId('landingConnect')
//   )

// TODO Future feature for volunteering or donating.
// const help = S.listItem()
//   .title('Help')
//   .icon(FaHandsHelping)
//   .child(
//     S.editor()
//       .id('landingHelp')
//       .schemaType('page')
//       .documentId('landingHelp')
//   )

const landingPage = S.listItem()
  .title('Landing Page')
  .icon(FaPlane)
  .child(
    S.list()
      .title('Landing Page')
      .items([
        callToAction,
        showcase,
        people,
        quotes,
        statistics,
        // connect,
        // help,
      ])
  )

export default landingPage

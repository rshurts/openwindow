import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Landing from '../components/landing'

const query = graphql`
  query LandingPageQuery {
    cta: sanityCallToAction(_id: { regex: "/(drafts.|)landingCallToAction/" }) {
      title
      id
      _id
      description
      button
      href
      blank
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }

    showcase: sanityShowcase(_id: { regex: "/(drafts.|)landingShowcase/" }) {
      title
      id
      _id
      vimeo
      _rawBody
    }

    people: sanityPeople(_id: { regex: "/(drafts.|)landingPeople/" }) {
      title
      id
      _id
      _rawBody
      people {
        staff {
          id
          name
          title
          headshot {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
        }
      }
    }

    quotes: sanityQuotes(_id: { regex: "/(drafts.|)landingQuotes/" }) {
      title
      id
      _id
      quotes {
        _key
        quoteText
        quoteAuthor
        quoteSource
        quoteURL
        quoteImage {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
        }
      }
    }

    statistics: sanityStatistics(
      _id: { regex: "/(drafts.|)landingStatistics/" }
    ) {
      title
      id
      _id
      statistics {
        _key
        number
        units
        description
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
  }
`

function LandingContainer(props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Landing
            {...props}
            cta={data.cta}
            showcase={data.showcase}
            people={data.people}
            quotes={data.quotes}
            statistics={data.statistics}
          />
        )
      }}
    />
  )
}

export default LandingContainer

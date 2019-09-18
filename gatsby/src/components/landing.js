import { graphql, StaticQuery } from 'gatsby'
import React, { Fragment } from 'react'
import LandingHero from './landing-hero'
import LandingSection from './landing-section'

const query = graphql`
  query LandingPageQuery {
    hero: sanityPage(_id: { regex: "/(drafts.|)landingHero/" }) {
      title
      id
      _id
      _rawBody
    }

    summary: sanityPage(_id: { regex: "/(drafts.|)landingSummary/" }) {
      title
      id
      _id
      _rawBody
    }

    quotes: sanityPage(_id: { regex: "/(drafts.|)landingQuotes/" }) {
      title
      id
      _id
      _rawBody
    }

    people: sanityPage(_id: { regex: "/(drafts.|)landingPeople/" }) {
      title
      id
      _id
      _rawBody
    }

    statistics: sanityPage(_id: { regex: "/(drafts.|)landingStatistics/" }) {
      title
      id
      _id
      _rawBody
    }

    help: sanityPage(_id: { regex: "/(drafts.|)landingHelp/" }) {
      title
      id
      _id
      _rawBody
    }
  }
`

const Landing = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Fragment>
            {data.hero && <LandingHero hero={data.hero} />}
            {data.summary && (
              <LandingSection
                title={data.summary.title}
                _rawBody={data.summary._rawBody}
              />
            )}
          </Fragment>
        )
      }}
    />
  )
}

export default Landing

import React from 'react'
import CallToAction from './call-to-action'
import Showcase from './showcase'
import People from './people'
import Quotes from './quotes'
import Statistics from './statistics'

const Landing = ({ cta, showcase, people, quotes, statistics }) => {
  return (
    <div>
      {cta && (
        <CallToAction
          title={cta.title}
          description={cta.description}
          button={cta.button}
          href={cta.href}
          blank={cta.blank}
          mainImage={cta.mainImage}
        />
      )}
      {showcase && (
        <Showcase
          title={showcase.title}
          vimeo={showcase.vimeo}
          _rawBody={showcase._rawBody}
        />
      )}
      {people && (
        <People
          title={people.title}
          people={people.people}
          _rawBody={people._rawBody}
        />
      )}
      {quotes && <Quotes title={quotes.title} quotes={quotes.quotes} />}
      {statistics && (
        <Statistics
          title={statistics.title}
          statistics={statistics.statistics}
          mainImage={statistics.mainImage}
        />
      )}
    </div>
  )
}

export default Landing

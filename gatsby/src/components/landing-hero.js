import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BlockText from './block-text'

const LandingHero = ({ hero }) => {
  return (
    <Fragment>
      <h2>{hero.title}</h2>
      <BlockText blocks={hero._rawBody} />
    </Fragment>
  )
}

LandingHero.defaultProps = {
  hero: {
    title: '',
    _rawBody: [],
  },
}

LandingHero.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    _rawBody: PropTypes.array,
  }),
}

export default LandingHero

import React from 'react'
import PropTypes from 'prop-types'
import BlockText from './block-text'

const LandingSection = ({ title, _rawBody }) => {
  return (
    <>
      <h2>{title}</h2>
      <BlockText blocks={_rawBody} />
    </>
  )
}

LandingSection.defaultProps = {
  title: '',
  _rawBody: [],
}

LandingSection.propTypes = {
  title: PropTypes.string,
  _rawBody: PropTypes.arrayOf(PropTypes.object),
}

export default LandingSection

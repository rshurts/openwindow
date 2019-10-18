import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import BlockText from '../block-text'

const Showcase = ({ title, vimeo, _rawBody }) => {
  return (
    <>
      <h2>{title}</h2>
      <ReactPlayer url={vimeo} playing controls light />
      <BlockText blocks={_rawBody} />
    </>
  )
}

Showcase.defaultProps = {
  title: '',
  vimeo: '',
  _rawBody: [],
}

Showcase.propTypes = {
  title: PropTypes.string,
  vimeo: PropTypes.string,
  _rawBody: PropTypes.arrayOf(PropTypes.object),
}

export default Showcase

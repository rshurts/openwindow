import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import imageUrlFor from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'
import BlockText from './block-text'

const LandingHero = ({ hero }) => {
  return (
    <Fragment>
      <h2>{hero.title}</h2>
      <BlockText blocks={hero._rawBody} />
      {hero.mainImage && hero.mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(hero.mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={hero.mainImage.alt}
          />
        </div>
      )}
    </Fragment>
  )
}

LandingHero.defaultProps = {
  hero: {
    title: '',
    _rawBody: [],
    mainImage: { asset: { _id: '' }, alt: '' },
  },
}

LandingHero.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    _rawBody: PropTypes.arrayOf(PropTypes.object),
    mainImage: PropTypes.shape({
      asset: PropTypes.shape({
        _id: PropTypes.string,
      }),
      alt: PropTypes.string,
    }),
  }),
}

export default LandingHero

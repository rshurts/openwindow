import React from 'react'
import PropTypes from 'prop-types'
import imageUrlFor from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const CallToAction = ({
  title,
  description,
  button,
  href,
  blank,
  mainImage,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{description}</h3>
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <a href={href} target={blank ? '_blank' : ''}>
        {button}
      </a>
    </>
  )
}

CallToAction.defaultProps = {
  title: '',
  description: '',
  button: '',
  href: '',
  blank: true,
  mainImage: { asset: { _id: '' }, alt: '' },
}

CallToAction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  href: PropTypes.string,
  blank: PropTypes.bool,
  mainImage: PropTypes.shape({
    asset: PropTypes.shape({
      _id: PropTypes.string,
    }),
    alt: PropTypes.string,
  }),
}

export default CallToAction

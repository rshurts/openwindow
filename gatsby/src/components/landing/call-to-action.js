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
    <section className="hero is-link is-fullheight-with-navbar">
      <div
        className="hero-body"
        style={{
          background: `center / cover url(${imageUrlFor(
            buildImageObj(mainImage)
          ).url()}`,
        }}
      >
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{description}</h2>
          <a className="button" href={href} target={blank ? '_blank' : ''}>
            {button}
          </a>
        </div>
        {/* {mainImage && mainImage.asset && (
        <figure>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </figure>
      )} */}
      </div>
    </section>
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

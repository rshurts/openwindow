import React from 'react'
import PropTypes from 'prop-types'
import imageUrlFor from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const Statistics = ({ statistics, mainImage }) => {
  return (
    <section
      className="hero is-large is-dark"
      style={{
        background: `top right / cover url(${imageUrlFor(
          buildImageObj(mainImage)
        ).url()})`,
      }}
    >
      <div className="hero-body" style={{ padding: '88px 24px 688px' }}>
        <div className="container">
          <div className="columns is-centered">
            {statistics.map(statistic => {
              return (
                <div className="column" key={statistic._key}>
                  <div className="content has-text-centered">
                    <p className="title no-space">{statistic.number}</p>
                    <p className="heading">{statistic.units}</p>
                    <p className="content is-small">{statistic.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

Statistics.defaultProps = {
  statistics: [],
  mainImage: { asset: { _id: '' }, alt: '' },
}

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object),
  mainImage: PropTypes.shape({
    asset: PropTypes.shape({
      _id: PropTypes.string,
    }),
    alt: PropTypes.string,
  }),
}

export default Statistics

import React from 'react'
import PropTypes from 'prop-types'
import imageUrlFor from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const Statistics = ({ title, statistics, mainImage }) => {
  return (
    <>
      <h2>{title}</h2>
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
      <ul>
        {statistics.map(statistic => {
          return (
            <li key={statistic._key}>
              {statistic.number}
              {statistic.units}
              {statistic.description}
            </li>
          )
        })}
      </ul>
    </>
  )
}

Statistics.defaultProps = {
  title: '',
  statistics: [],
  mainImage: { asset: { _id: '' }, alt: '' },
}

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object),
  mainImage: PropTypes.shape({
    asset: PropTypes.shape({
      _id: PropTypes.string,
    }),
    alt: PropTypes.string,
  }),
}

export default Statistics

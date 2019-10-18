import React from 'react'
import PropTypes from 'prop-types'
import imageUrlFor from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const Quotes = ({ title, quotes }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {quotes.map(quote => {
          return (
            <li key={quote._key}>
              {quote.quoteImage && quote.quoteImage.asset && (
                <img
                  src={imageUrlFor(buildImageObj(quote.quoteImage))
                    .width(120)
                    .height(120)
                    .fit('crop')}
                  alt="TODO"
                />
              )}
              {quote.quoteText}
              {quote.quoteAuthor}
              <a href={quote.quoteURL}>{quote.quoteSource}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

Quotes.defaultProps = {
  title: '',
  quotes: [],
}

Quotes.propTypes = {
  title: PropTypes.string,
  quotes: PropTypes.arrayOf(PropTypes.object),
}

export default Quotes

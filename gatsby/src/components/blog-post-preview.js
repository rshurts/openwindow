import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { buildImageObj, getBlogUrl } from '../lib/helpers'
import imageUrlFor from '../lib/image-url'
import BlockText from './block-text'

function BlogPostPreview({ _rawExcerpt, mainImage, publishedAt, slug, title }) {
  return (
    <>
      {publishedAt && slug && (
        <Link to={getBlogUrl(publishedAt, slug)}>
          <div>
            {mainImage && mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .url()}
                alt={mainImage.alt}
              />
            )}
          </div>
          <h3>{title}</h3>
          {_rawExcerpt && (
            <div>
              <BlockText blocks={_rawExcerpt} />
            </div>
          )}
        </Link>
      )}
    </>
  )
}

BlogPostPreview.defaultProps = {
  _rawExcerpt: [],
  mainImage: { asset: { _id: '' }, alt: '' },
  publishedAt: '',
  slug: { current: '' },
  title: '',
}

BlogPostPreview.propTypes = {
  _rawExcerpt: PropTypes.arrayOf(PropTypes.object),
  mainImage: PropTypes.shape({
    asset: PropTypes.shape({
      _id: PropTypes.string,
    }),
    alt: PropTypes.string,
  }),
  publishedAt: PropTypes.string,
  slug: PropTypes.shape({
    current: PropTypes.string,
  }),
  title: PropTypes.string,
}

export default BlogPostPreview

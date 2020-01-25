import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import imageUrlFor from '../../lib/image-url'

function Figure(props) {
  const { alt, asset, caption } = props
  return (
    <figure>
      {asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .url()}
          alt={alt}
        />
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Figure

import React, { useState } from 'react'
import { buildImageObj } from '../../lib/helpers'
import imageUrlFor from '../../lib/image-url'

function Slideshow({ slides }) {
  if (!slides) return null
  const len = slides.length
  const [index, setIndex] = useState(0)
  function handlePrev() {
    setIndex(Math.max(index - 1, 0))
  }
  function handleNext() {
    setIndex(Math.min(index + 1, len - 1))
  }
  return (
    <div>
      <div>
        <button type="button" onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        <span>
          {index + 1} of
          {len}
        </span>
        <button type="button" onClick={handleNext} disabled={index === len - 1}>
          Next
        </button>
      </div>
      <ul
        data-index={index}
        style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
      >
        {slides.map(slide => (
          <li key={slide._key}>
            {slide.asset && (
              <img
                src={imageUrlFor(buildImageObj(slide))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .url()}
                alt="Carousel"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Slideshow

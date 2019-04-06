import imageUrlBuilder from '@sanity/image-url'
import sanityConfig from '../../../studio/sanity.json'

const builder = imageUrlBuilder(sanityConfig.api)

export default function imageUrlFor(source) {
  return builder.image(source)
}

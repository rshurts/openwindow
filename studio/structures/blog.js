import S from '@sanity/desk-tool/structure-builder'
import { FaMarker, FaRss, FaTag } from 'react-icons/fa'

const blogPosts = S.listItem()
  .title('Posts')
  .id('blogPosts')
  .icon(FaMarker)
  .schemaType('post')
  .child(S.documentTypeList('post').title('Posts'))

const blogCategories = S.listItem()
  .title('Categories')
  .id('blogCategories')
  .icon(FaTag)
  .schemaType('category')
  .child(S.documentTypeList('category').title('Categories'))

const blog = S.listItem()
  .title('Blog')
  .id('blog')
  .icon(FaRss)
  .child(
    S.list()
      .title('Blog')
      .items([blogPosts, blogCategories])
  )

export default blog

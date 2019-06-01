import S from '@sanity/desk-tool/structure-builder'
import { FaRss, FaTag } from 'react-icons/fa'

const blogPosts = S.listItem()
  .title('Blog Posts')
  .icon(FaRss)
  .schemaType('post')
  .child(S.documentTypeList('post').title('Blog posts'))

const blogCategories = S.listItem()
  .title('Blog Categories')
  .icon(FaTag)
  .schemaType('category')
  .child(S.documentTypeList('category').title('Categories'))

const blog = [blogPosts, blogCategories]

export default blog

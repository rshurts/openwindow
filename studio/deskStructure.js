import S from '@sanity/desk-tool/structure-builder'
import { FaFile } from 'react-icons/fa'
import {
  about,
  companyInfo,
  contact,
  education,
  siteSettings,
  support,
} from './structures'

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'post',
  'project',
  'siteSettings',
]

export default () =>
  S.list()
    .title('Content')
    .items([
      about,
      education,
      contact,
      support,
      companyInfo,
      siteSettings,
      S.listItem()
        .title('Blog')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile),
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId())
      ),
    ])

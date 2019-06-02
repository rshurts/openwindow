import S from '@sanity/desk-tool/structure-builder'
// import { FaFile } from 'react-icons/fa'
import {
  about,
  blog,
  companyInfo,
  contact,
  education,
  onStage,
  siteSettings,
  staff,
  support,
} from './structures'

const hiddenTypes = [
  'castMember',
  'category',
  'companyInfo',
  'page',
  'post',
  'project',
  'season',
  'siteSettings',
  'staff',
]

export default () =>
  S.list()
    .title('Content')
    .items([
      onStage,
      blog,
      staff,
      about,
      education,
      contact,
      support,
      companyInfo,
      siteSettings,
      // S.listItem()
      //   .title('Projects')
      //   .schemaType('project')
      //   .child(S.documentTypeList('project')),
      // S.listItem()
      //   .title('Pages')
      //   .child(
      //     S.list()
      //       .title('Pages')
      //       .items([
      //         S.listItem()
      //           .title('About')
      //           .child(
      //             S.editor()
      //               .id('aboutPage')
      //               .schemaType('page')
      //               .documentId('about')
      //           )
      //           .icon(FaFile),
      //         S.listItem()
      //           .title('Contact')
      //           .child(
      //             S.editor()
      //               .id('contactPage')
      //               .schemaType('page')
      //               .documentId('contact')
      //           )
      //           .icon(FaFile),
      //       ])
      //   ),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId())
      ),
    ])

import S from '@sanity/desk-tool/structure-builder'
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
  'season',
  'show',
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
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId())
      ),
    ])

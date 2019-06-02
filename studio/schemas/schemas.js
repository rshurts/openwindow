/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import castMember from './castMember'
import category from './category'
import companyInfo from './companyInfo'
import figure from './figure'
import mainImage from './mainImage'
import page from './page'
import person from './person'
import post from './post'
import postAuthor from './postAuthor'
import project from './project'
import projectMember from './projectMember'
import season from './season'
import siteSettings from './siteSettings'
import slideshow from './slideshow'
import staff from './staff'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    castMember,
    category,
    companyInfo,
    figure,
    mainImage,
    page,
    person,
    post,
    postAuthor,
    project,
    projectMember,
    season,
    siteSettings,
    slideshow,
    staff,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})

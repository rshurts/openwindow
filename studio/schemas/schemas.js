/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import callToAction from './callToAction'
import castMember from './castMember'
import castMemberReference from './castMemberReference'
import category from './category'
import companyInfo from './companyInfo'
import figure from './figure'
import mainImage from './mainImage'
import page from './page'
import people from './people'
import post from './post'
import season from './season'
import seasonReference from './seasonReference'
import show from './show'
import showcase from './showcase'
import siteSettings from './siteSettings'
import slideshow from './slideshow'
import staff from './staff'
import staffReference from './staffReference'
import statistic from './statistic'
import statistics from './statistics'
import quote from './quote'
import quotes from './quotes'

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
    callToAction,
    castMember,
    castMemberReference,
    category,
    companyInfo,
    figure,
    mainImage,
    page,
    people,
    post,
    season,
    seasonReference,
    show,
    showcase,
    siteSettings,
    slideshow,
    staff,
    staffReference,
    statistic,
    statistics,
    quote,
    quotes,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})

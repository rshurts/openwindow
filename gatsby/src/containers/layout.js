import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      name
      address1
      address2
      city
      state
      zipCode
      email
      phone
      twitter
      facebook
      instagram
      pinterest
      vimeo
    }
  }
`

function LayoutContainer(props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        if (!data.companyInfo) {
          throw new Error(
            'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
          )
        }
        return (
          <Layout
            {...props}
            companyInfo={data.companyInfo}
            siteTitle={data.site.title}
          />
        )
      }}
    />
  )
}

export default LayoutContainer

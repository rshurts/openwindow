import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, companyInfo, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <div>{children}</div>
    <Footer companyInfo={companyInfo} />
  </>
)

export default Layout

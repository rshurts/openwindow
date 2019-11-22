import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <div className={styles.content}>{children}</div>
    <Footer companyInfo={companyInfo} />
  </>
)

export default Layout

import { Link } from 'gatsby'
import React from 'react'

import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
)

export default Header

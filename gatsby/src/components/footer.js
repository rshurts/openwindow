import React from 'react'

import styles from './layout.module.css'

const Footer = ({ companyInfo }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.city}, {companyInfo.state} {companyInfo.zipCode}
              <br />
              {companyInfo.email}
              <br />
              {companyInfo.phone}
              {companyInfo.twitter}
              {companyInfo.facebook}
              {companyInfo.instagram}
              {companyInfo.pinterest}
              {companyInfo.vimeo}
            </div>
          )}
        </div>

        <div className={styles.siteInfo}>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}

export default Footer

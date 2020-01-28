import React from 'react'

const Footer = ({ companyInfo }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8" />
          <div className="column is-4">
            {companyInfo && (
              <>
                <div>
                  <strong>{companyInfo.name}</strong>
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
                  <a href={`mailto:${companyInfo.email}`}>
                    {companyInfo.email}
                  </a>
                  <br />
                  <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                </div>
                <span className="icon is-large">
                  <a href={companyInfo.twitter}>
                    <i className="mdi mdi-36px mdi-twitter" />
                  </a>
                </span>
                <span className="icon is-large">
                  <a href={companyInfo.facebook}>
                    <i className="mdi mdi-36px mdi-facebook" />
                  </a>
                </span>
                <span className="icon is-large">
                  <a href={companyInfo.instagram}>
                    <i className="mdi mdi-36px mdi-instagram" />
                  </a>
                </span>
                <span className="icon is-large">
                  <a href={companyInfo.pinterest}>
                    <i className="mdi mdi-36px mdi-pinterest" />
                  </a>
                </span>
                <span className="icon is-large">
                  <a href={companyInfo.vimeo}>
                    <i className="mdi mdi-36px mdi-vimeo" />
                  </a>
                </span>
              </>
            )}
          </div>
        </div>
        <div className="content has-text-centered is-small">
          © Open Window Theatre {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer

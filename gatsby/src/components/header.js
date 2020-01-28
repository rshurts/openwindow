import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="hero-head">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
      </div>
      <div id="navbarHeader" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="button is-primary">Donate</div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header

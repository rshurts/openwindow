import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="hero-head">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </nav>
  </div>
)

export default Header

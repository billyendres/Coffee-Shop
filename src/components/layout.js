import React from "react"
import PropTypes from "prop-types"
import Navbar from "./globals/Navbar"
// import { StaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

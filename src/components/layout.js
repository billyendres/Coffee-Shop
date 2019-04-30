import React from "react"
import PropTypes from "prop-types"
import Navbar from "./globals/Navbar"
import Footer from "./globals/Footer"

// import { StaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

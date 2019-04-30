import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const BodyStyle = styled.body`
  color: black;
  font-size: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif !important;
  letter-spacing: 0.2rem;
`

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    styles: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, styles: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          styles: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <BodyStyle>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <img src={logo} alt="logo" />
          <Link to="/" className="navbar-brand" />
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={this.state.styles}>
            <ul className="navbar-nav mx auto">
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                )
              })}
              <li className="nav-item ml-sm-5">
                <FaCartArrowDown
                  style={{ fontSize: "2rem", marginTop: "0.7rem" }}
                />
              </li>
            </ul>
          </div>
        </nav>
      </BodyStyle>
    )
  }
}

// Link to bootstrap.min.css which will stay in layout.js
// Link to React Icons

import React from "react"
import styled from "styled-components"

const FooterStyle = styled.footer`
  background: black;
  color: white;
  padding: 1rem;
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase">
            <h3 style={{ fontSize: "1rem" }}>
              All rights reserved &copy;{new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer

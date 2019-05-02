import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ButtonStyle = styled.button`
  border-radius: 50px;
  border: 2px solid black;
  button:hover {
    color: grey;
    border: grey;
  }
`

const Product = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6 style={{ fontSize: "1.5rem" }}>{product.title}</h6>
          <h6>${product.price}</h6>
          <ButtonStyle>
            <button className="btn text-uppercase">Add to Cart</button>
          </ButtonStyle>
        </div>
      </div>
    </div>
  )
}
export default Product

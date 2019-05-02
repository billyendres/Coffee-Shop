import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/Background"
import Info from "../components/home/Info"
import Menu from "../components/home/Menu"
import Products from "../components/home/Products"
import Contact from "../components/home/Contact"

const IndexPage = ({ data }) => (
  // pass in data to render background image
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="COLOMBIAN COFFEE CO"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
// check gatsby-image-plugin for fragment query info(...gatsby)

export default IndexPage

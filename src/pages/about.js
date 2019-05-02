import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/Background"
import InfoHome from "../components/home/InfoHome"

const AboutPage = ({ data }) => (
  // pass in data to render background image
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    />
    <InfoHome />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage

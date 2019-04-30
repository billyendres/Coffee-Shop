import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Title from "../globals/Title"

const BodyStyle = styled.body`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
`

const ButtonStyle = styled.button`
  border-radius: 50px;
  border: 3px solid black;
  button:hover {
    color: grey;
    border: grey;
  }
`

const Info = () => {
  return (
    <BodyStyle>
      <section className="py-5">
        <div className="container">
          <Title title="Our Story" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                jdbfjebf dfjefjefnenf efnejfne ekfefief ejfnenfkef eklfneknfkenf
                ekfneknfknef ekfnkenfkenf ekfnkenfkenfenfknekfn eknfkenfkefn
                ekfnkenfkenfenfknekfn kefneknfke jdbfjebf dfjefjefnenf efnejfne
                ekfefief ejfnenfkef eklfneknfkenf ekfneknfknef ekfnkenfkenf
                ekfnkenfkenfenfknekfn eknfkenfkefn ekfnkenfkenfenfknekfn
                kefneknfke jdbfjebf dfjefjefnenf efnejfne ekfefief ejfnenfkef
                eklfneknfkenf ekfneknfknef ekfnkenfkenf ekfnkenfkenfenfknekfn
                eknfkenfkefn ekfnkenfkenfenfknekfn kefneknfke jdbfjebf
                dfjefjefnenf efnejfne ekfefief ejfnenfkef eklfneknfkenf
                ekfneknfknef ekfnkenfkenf ekfnkenfkenfenfknekfn eknfkenfkefn
                ekfnkenfkenfenfknekfn kefneknfke
              </p>
              <Link to="/about">
                <ButtonStyle>
                  <button
                    // style={{ color: "yellow", borderColor: "yellow" }}
                    className="btn text-uppercase"
                  >
                    About Page
                  </button>
                </ButtonStyle>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BodyStyle>
  )
}
export default Info

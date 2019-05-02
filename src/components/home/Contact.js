import React from "react"
import Title from "../globals/Title"
import styled from "styled-components"

const ButtonStyle = styled.button`
  border-radius: 50px;
  border: 3px solid black;
  background: gainsboro;
  button:hover {
    color: black;
    border: black;
  }
`

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/endres63@hotmail.com"
            method="POST"
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="First Last"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="example@hotmail.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Get In Touch</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="We Look Forward To Hearing From You!"
              />
            </div>
            {/* submit */}
            <ButtonStyle>
              <button
                style={{ background: "gainsboro" }}
                type="submit"
                className="btn py-1"
              >
                Submit
              </button>
            </ButtonStyle>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact

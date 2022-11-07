import React from 'react'
import Title from '../Title'
import "./Contact.css"

function Contact() {
  return (
    <div className='contactPage'>
    <div className="contactUs">
    {/* <div className="contactHeading">
      <h1>Contact Us</h1>
    </div> */}
    <Title
    title="Contact Us"
    />
    <div className="contactDetails">
      <div className="contactInfo">
        <div className="info1">
          <p>Netguru S.A.</p>
          <p>ul. Małe Garbary 9</p>
          <p>61-756 Poznań, Poland</p>
          
        </div>
        <div className="info2">
          <p>VAT-ID: PL7781454968</p>
          <p>REGON: 300826280</p>
          <p>KRS: 0000745671</p>
          
        </div>
      </div>
      {/* <div className="contactLinks">
        <div className="link"><p>Team</p></div>
        <div className="link"><p>Terms Of Use</p></div>
        <div className="link"><p>Privacy Policy</p></div>
        <div className="link"><p>Press</p></div>
        <div className="link"><p>Culture Book</p></div>
        <div className="link"><p>Our Story</p></div>
      </div> */}
    </div>
    <div className="social">
      <div className="socialContainer">
        <div className="socialIcon"><i className="fab fa-twitter"></i></div>
        <div className="socialIcon"><i className="fab fa-facebook-f"></i></div>
        <div className="socialIcon"><i className="fab fa-linkedin-in"></i></div>
        <div className="socialIcon"><i className="fab fa-github"></i></div>
        <div className="socialIcon"><i className="fab fa-instagram"></i></div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Contact

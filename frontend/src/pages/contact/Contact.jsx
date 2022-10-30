import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact__us'>
        <div className='title'>
          <h2>Get In <span style={{color:"var(--color-subtext)"}}>Touch</span></h2>
        </div>

        <div className="box">
        {/* Form */}
          <div className='contact form'>
            <h3>Send a Message!</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className='inputBox'>
                    <span>First Name</span>
                    <input type="text" placeholder="Aman" />
                  </div>
                  <div className='inputBox'>
                    <span>Last Name</span>
                    <input type="text" placeholder="Chopra" />
                  </div>
                </div>
                <div className='row50'>
                  <div className='inputBox'>
                    <span>Email Address</span>
                    <input type="text" placeholder="amanchopra@gmail.com" />
                  </div>
                  <div className='inputBox'>
                    <span>Mobile</span>
                    <input type="text" placeholder="+91 9876543210" />
                  </div>
                </div>
                <div className='row100'>
                  <div className='inputBox'>
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>
                <div className='row100'>
                  <div className='inputBox'>
                  <input type="submit" value="Send Message" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className='contact info'>
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span><ion-icon name="location"></ion-icon></span>
                <p>Salt Lake Sector-V, Kolkata</p>
              </div>
              <div>
                <span><ion-icon name="mail"></ion-icon></span>
                <a href="mailto:niitofficialinfo@gmail.com">niitofficialinfo@gmail.com</a>
              </div>
              <div>
                <span><ion-icon name="call"></ion-icon></span>
                <a href="tel:+91  7602463416">+91 760 2463 416</a>
              </div>
              {/* Social Media */}
              {/* <ul className="sci">
                <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
              </ul> */}
            </div>
          </div>

          {/* Map */}
          <div className='contact map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.275750592555!2d88.42881601732272!3d22.568787698368443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ac4c4ff7a7%3A0x356ef393349e47e3!2sNational%20Institute%20for%20Industrial%20Training!5e0!3m2!1sen!2sin!4v1667153529200!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
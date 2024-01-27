import React from 'react';
import { Button } from "antd";
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';
import './contactSectionStyles.css';

function ContactSection() {
  const handleContactClick = (contactType) => {
    if (contactType == "email") {
      window.open('mailto:leit199966@gmail.com')
    } else {
      window.open('https://www.linkedin.com/in/leonardo-fuentes-claros-4a425b186/');
    }
  }

  return (
    <section id='contact'>
      <div className='contact-main-text'>
        <p className='contact_p1'>Get in Touch</p>
        <h1 className='title-contact'>Contact Me</h1>
      </div>
      <div className='contact-info'>
        <div className='email-container'>
          <Button
            type='text'
            className='contact-btn'
            onClick={() => handleContactClick("email")}
          >
            <img src={emailIcon} alt="email icon" className='email-icon_img' />
            <p>leit199966@gmail.com</p>
          </Button>
        </div>
        <div className='linkedin-container'>
          <Button
            type='text'
            className='contact-btn'
            onClick={() => handleContactClick("linkedin")}
          >
            <img src={linkedinIcon} alt="linkedin icon" className='linkedin-icon_img' />
            <p>Linkedin</p>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
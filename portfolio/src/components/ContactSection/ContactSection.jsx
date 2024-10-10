import React from 'react';
import { Button } from "antd";
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';
import './contactSectionStyles.css';
import '../../components/styles/globalStyles.css';

function ContactSection({ isDarkMode }) {
  const handleContactClick = (contactType) => {
    if (contactType == "email") {
      window.open('mailto:leonardofuentesclaros.com')
    } else {
      window.open('https://www.linkedin.com/in/leonardo-fuentes-claros-4a425b186/');
    }
  }

  return (
    <section id='contact'>
      <div className='contact-main-text'>
        <p className='contact_p1'>Get in Touch</p>
        <h1 className={isDarkMode ? 'section-title section-title__dark-mode' : 'section-title'}>Contact Me</h1>
      </div>
      <div className='contact-info'>
        <div className='email-container'>
          <Button
            type='text'
            className={isDarkMode?'contact-btn contact-btn__dark-mode':'contact-btn'}
            onClick={() => handleContactClick("email")}
          >
            <img src={emailIcon} alt="email icon" className={isDarkMode ? 'email-icon_img email-icon_img__dark-mode' : 'email-icon_img'} />
            <p>leonardofuentesclaros@gmail.com</p>
          </Button>
        </div>
        <div className='linkedin-container'>
          <Button
            type='text'
            className={isDarkMode?'contact-btn contact-btn__dark-mode':'contact-btn'}
            onClick={() => handleContactClick("linkedin")}
          >
            <img src={linkedinIcon} alt="linkedin icon" className={isDarkMode? 'linkedin-icon_img linkedin-icon_img__dark-mode':'linkedin-icon_img'} />
            <p>Linkedin</p>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
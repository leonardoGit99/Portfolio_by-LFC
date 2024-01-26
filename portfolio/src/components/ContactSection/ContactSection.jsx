import React from 'react';
import './contactSectionStyles.css';

function ContactSection() {
  return (
    <section id='contact'>
      <div className='contact-main-text'>
        <p className='contact_p1'>Get in Touch</p>
        <h1 className='title-contact'>Contact Me</h1>
      </div>
      <div className='contact-info'>
        <div className='email-container'>
          <p>leit199966@gmail.com</p>
        </div>
        <div className='linkedin-container'>
          <p>LinkedIn</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
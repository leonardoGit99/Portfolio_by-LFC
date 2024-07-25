import React from 'react';
import aboutLeoPhoto from '../../assets/about-me-photo.webp';
import { RiseOutlined, BookOutlined } from '@ant-design/icons';
import './aboutSectionStyles.css';

function AboutSection({ handleArrowClick, arrowIcon }) {

  return (
    <section id="about">
      <div className='about-main-text'>
        <p className='about_p1'>Get To Know More</p>
        <h1 className='title__about'>About Me</h1>
      </div>
      <div className='about-section-flex-container'>
        <div className='about-img-container'>
          <img
            src={aboutLeoPhoto}
            alt='Leonardo`s photo'
            className='about-img'
          />
        </div>

        <div className='about-details-container'>
          <div className='details-container'>
            <div className='experience-container'>
              <RiseOutlined className='experience-icon' />
              <h3 className='experience_title'>Experience</h3>
              <p><span className='experience__bold'>2+ years</span> <br /> Frontend Development</p>
              <p><span className='experience__bold'>1+ years </span><br /> Backend Development</p>
              <p><span className='experience__bold'>6 months</span> <br /> QA</p>
            </div>
            <div className='education-container'>
              <BookOutlined className='education-icon' />
              <h3 className='education_title'>Education</h3>
              <p><span className='experience__bold'>Bachelor of Humanities</span><br /> La Salle College</p>
              <p><span className='experience__bold'>Student of Engineering of systems</span><br /> U.M.S.S </p>
              <p><span className='experience__bold'>Student of intensive english course</span><br /> C.B.A </p>
            </div>
          </div>
          <div className='about_p2'>
            <p>
              Student who has completed all coursework of the systems engineering degree,
              focused on web programming. Interested in finding opportunities
              where he can apply the experience he developed through academic
              and personal projects. This experience has strengthened my skills
              in problem solving and teamwork, even under pressure. I have a
              sense of responsibility, initiative, ease of working in a team
              and I actively seek to learn new technologies.
            </p>
          </div>
        </div>
      </div>
      <img
        className='arrow-icon'
        src={arrowIcon}
        alt='arrow icon'
        onClick={() => handleArrowClick("experience")}
      />
    </section>
  )
}

export default AboutSection;
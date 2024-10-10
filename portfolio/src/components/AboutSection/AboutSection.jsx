import React from 'react';
import aboutLeoPhoto from '../../assets/about-me-photo.webp';
import { RiseOutlined, BookOutlined } from '@ant-design/icons';
import './aboutSectionStyles.css';
import '../../components/styles/globalStyles.css';

function AboutSection({ handleArrowClick, arrowIcon, isDarkMode }) {

  return (
    <section id="about">
      <div className='about-main-text'>
        <p className='about_p1'>Get To Know More</p>
        <h1 className={isDarkMode ? 'section-title section-title__dark-mode' : 'section-title'}>About Me</h1>
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
              <RiseOutlined className={isDarkMode ? 'experience-icon icon__dark-mode' : 'experience-icon'} />
              <h3 className={isDarkMode ? 'h3-title h3-title__dark-mode' : 'h3-title'}>Experience</h3>
              <p><span className='experience__bold'>2+ years</span> <br /> Frontend Development</p>
              <p><span className='experience__bold'>1+ years </span><br /> Backend Development</p>
              <p><span className='experience__bold'>6 months</span> <br /> QA</p>
            </div>
            <div className='education-container'>
              <BookOutlined className={isDarkMode ? 'education-icon icon__dark-mode' : 'education-icon'} />
              <h3 className={isDarkMode ? 'h3-title h3-title__dark-mode' : 'h3-title'}>Education</h3>
              <p><span className='experience__bold'>Bachelor of Humanities</span><br /> La Salle College</p>
              <p><span className='experience__bold'>Student of Engineering of systems</span><br /> U.M.S.S </p>
              <p><span className='experience__bold'>Student of intensive english course</span><br /> C.B.A </p>
            </div>
          </div>
          <div className='about_p2'>
            <p>
              I'm interested in finding opportunities
              where I can apply the experience I have
              developed through professional,
              academic, and personal projects. This
              experience has strengthened my
              problem-solving skills and my ability to
              work as part of a team, even under
              pressure. I have a sense of responsibility,
              initiative, and ease in working with
              others, and I'm actively seeking to learn
              new technologies.

            </p>
          </div>
        </div>
      </div>
      <img
        className={isDarkMode? 'arrow-icon arrow-icon__dark-mode':'arrow-icon'}
        src={arrowIcon}
        alt='arrow icon'
        onClick={() => handleArrowClick("experience")}
      />
    </section>
  )
}

export default AboutSection;
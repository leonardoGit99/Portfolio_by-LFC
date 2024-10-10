import React from 'react';
import { Avatar, Button, Image } from 'antd';
import ProfilePhoto from '../../assets/leonardo-fuentes-claros.webp';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import leonardoFuentesClarosCV from '../../assets/Leonardo Fuentes Claros_CV.pdf'
import './profileSectionStyles.css';

function ProfileSection({ isDarkMode }) {
  const handleBtnClick = (btnType) => {
    if (btnType == "downloadCV") {
      window.open(leonardoFuentesClarosCV);
    } else {
      location.href = '#contact';
    }
  }
  const handleSocialClick = (socialType) => {
    if (socialType == "linkedin") {
      window.open('https://www.linkedin.com/in/leonardo-fuentes-claros-4a425b186');
    } else {
      window.open('https://github.com/leonardoGit99');
    }
  }

  return (
    <section id="profile">
      <div className='section-profile_flex-container'>
        <div className='section-profile_photo-container'>
          <Image
            src={ProfilePhoto}
            className='img'
          // height={400}
          // width={400}
          >
            {/* <Avatar src={ProfilePhoto} size={{ xs: 400, sm: 400, md: 400, lg: 400, xl: 400, xxl: 400 }} /> */}
          </Image>
        </div>
        <div className='section-profile_info-container'>
          <p className='section-profile_info-container__p1'>Hello, I'm</p>
          <h1 className={isDarkMode ? 'title title__dark-mode' : 'title'}>Leonardo Fuentes </h1>
          <h1 className={isDarkMode ? 'title title__dark-mode' : 'title'}>Claros</h1>
          <p className='section-profile_info-container__p2'>Software Developer</p>
          <div className='section-profile_info-container_btns'>
            <Button
              size='large'
              type='default'
              className={isDarkMode? 'section-profile_info-container__btn-1 btn-secondary__dark-mode':'section-profile_info-container__btn-1'}
              onClick={() => handleBtnClick("downloadCV")}
            >
              Download CV
            </Button>
            <Button
              size='large'
              type='primary'
              className='section-profile_info-container__btn-2'
              onClick={() => handleBtnClick("contactInfo")}
            >
              Contact Info
            </Button>
          </div>
          <div className='section-profile_socials-container'>
            <img
              className={isDarkMode ? 'linkedin_icon linkedin_icon__dark-mode' : 'linkedin_icon'}
              src={linkedinIcon}
              alt="Linkedin icon"
              onClick={() => handleSocialClick("linkedin")}
            />
            <img
              className={isDarkMode ? 'github_icon github_icon__dark-mode' : 'github_icon'}
              src={githubIcon}
              alt="Github icon"
              onClick={() => handleSocialClick("github")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
import React from 'react';
import arrowIcon from '../assets/arrow.png';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';


function Portfolio() {
  const handleArrowClick = (sectionId) => {
    window.history.pushState(null, '', `/#${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <ProfileSection />
      <AboutSection handleArrowClick={handleArrowClick} arrowIcon={arrowIcon}/>
      <ExperienceSection handleArrowClick={handleArrowClick} arrowIcon={arrowIcon}/>
      <ProjectsSection handleArrowClick={handleArrowClick}  arrowIcon={arrowIcon}/>
      <ContactSection />
    </>
  )
}

export default Portfolio
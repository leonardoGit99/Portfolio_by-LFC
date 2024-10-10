import React from 'react';
import arrowIcon from '../assets/arrow.png';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { useStore } from '../store/useStore';

function Portfolio() {
  const { isDarkMode } = useStore();
  const handleArrowClick = (sectionId) => {
    window.location.href = `/#${sectionId}`
  }
  return (
    <>
      <ProfileSection isDarkMode={isDarkMode} />
      <AboutSection handleArrowClick={handleArrowClick} arrowIcon={arrowIcon} isDarkMode={isDarkMode} />
      <ExperienceSection handleArrowClick={handleArrowClick} arrowIcon={arrowIcon} isDarkMode={isDarkMode} />
      <ProjectsSection handleArrowClick={handleArrowClick} arrowIcon={arrowIcon} isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
    </>
  )
}

export default Portfolio
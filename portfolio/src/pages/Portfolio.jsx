import React from 'react';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';


function Portfolio() {
  const handleArrowClick = (section) => {
    location.href = `/#${section}`
  }
  return (
    <>
      <ProfileSection />
      <AboutSection handleArrowClick={handleArrowClick} />
      <ExperienceSection handleArrowClick={handleArrowClick} />
      <ProjectsSection handleArrowClick={handleArrowClick} />
    </>
  )
}

export default Portfolio
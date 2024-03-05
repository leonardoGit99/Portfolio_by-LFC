import React from 'react';
import { List } from 'antd';
import ProjectCard from '../ProjectCard/ProjectCard';
import bettyStoreProjectImg from '../../assets/bettyStore.webp';
import ezRentalProjectImg from '../../assets/ezRental.webp';
import './projectsSectionStyles.css';

function ProjectsSection({handleArrowClick, arrowIcon}) {
  const projects = [
    {
      title: "BettyStore",
      img: bettyStoreProjectImg,
      githubLink: "https://github.com/leonardoGit99/BettyStore",
      liveDemoLink: "https://truebettystore.000webhostapp.com/"
    }, {
      title: "EzRental",
      img: ezRentalProjectImg,
      githubLink: "https://github.com/leonardoGit99/EzRental",
      liveDemoLink: "https://ez-rental-kinsta-front.vercel.app/"
    }
  ]
  return (
    <section id="projects">
      <div className='projects-main-text'>
        <p className='projects-p1'>Browse My Recent</p>
        <h1 className='projects-title'>Projects</h1>
      </div>
      <div className='projects-list-containers'>
        <List
          grid={{
            xs: 1,
            sm: 1,
            md: 1,
            lg: 2,
            xl: 2,
            xxl: 2
          }}
          pagination={{
            onChange: page => {
              console.log(page);
            }, pageSize: 2,
          }}
          dataSource={projects}
          renderItem={(project) => (
            <List.Item
              className='card-list-item'
            >
              <ProjectCard
                title={project.title}
                img={project.img}
                githubLink={project.githubLink}
                liveDemoLink={project.liveDemoLink}
              />
            </List.Item>
          )}
        />
      </div>
      <img
        className='arrow-icon'
        src={arrowIcon}
        alt='arrow icon'
        onClick={() => handleArrowClick("contact")}
      />
    </section>
  )
}

export default ProjectsSection;
import React from 'react';
import { List } from 'antd';
import ProjectCard from '../ProjectCard/ProjectCard';
import bettyStoreProjectImg from '../../assets/bettyStore.webp';
import ezRentalProjectImg from '../../assets/ezRental.webp';
import taskFlow from '../../assets/taskFlow.webp';
import conexionAcademicaImg from '../../assets/conexion-academica.webp'
import './projectsSectionStyles.css';
import '../../components/styles/globalStyles.css';

function ProjectsSection({ handleArrowClick, arrowIcon, isDarkMode }) {
  const projects = [
    {
      title: "Conexión Académica",
      img: conexionAcademicaImg,
      githubLink: "https://github.com/No-Country-simulation/c22-22-t-webapp",
      liveDemoLink: "https://conexion-academica.onrender.com"
    },
    {
      title: "TaskFlow",
      img: taskFlow,
      githubLink: "https://github.com/leonardoGit99/pern-stack_server",
      liveDemoLink: "https://pern-stack-by-lfc.vercel.app/"
    }, {
      title: "EzRental",
      img: ezRentalProjectImg,
      githubLink: "https://github.com/leonardoGit99/EzRental",
      liveDemoLink: "https://ez-rental-kinsta-front.vercel.app/"
    }, {
      title: "BettyStore",
      img: bettyStoreProjectImg,
      githubLink: "https://github.com/leonardoGit99/BettyStore",
      liveDemoLink: "https://truebettystore.000webhostapp.com/"
    }
  ]
  return (
    <section id="projects">
      <div className='projects-main-text'>
        <p className='projects-p1'>Browse My Recent</p>
        <h1 className={isDarkMode ? 'section-title section-title__dark-mode' : 'section-title'}>Projects</h1>
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
                isDarkMode={isDarkMode}
                title={project.title}
                img={project.img}
                githubLink={project.githubLink}
                liveDemoLink={project.liveDemoLink}
              />
            </List.Item>
          )}
          className={isDarkMode ? 'list_dark-mode' : ''}
        />
      </div>
      <img
        className={isDarkMode ? 'arrow-icon arrow-icon__dark-mode' : 'arrow-icon'}
        src={arrowIcon}
        alt='arrow icon'
        onClick={() => handleArrowClick("contact")}
      />
    </section>
  )
}

export default ProjectsSection;
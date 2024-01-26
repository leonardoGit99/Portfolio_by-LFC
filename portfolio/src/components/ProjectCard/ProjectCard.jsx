import React from 'react';
import { Button, Card, Tooltip } from 'antd';
import './projectCardStyles.css';

function ProjectCard({ title, img, githubLink, liveDemoLink }) {
  const handleGithubClick = (project) => {
    if (project == "BettyStore") {
      window.open(githubLink);
    } else if (project == "EzRental") {
      window.open(githubLink);
    }
  }

  const handleLiveDemoClick = (project) => {
    if (project == "BettyStore") {
      window.open(liveDemoLink);
    } else if (project == "EzRental") {
      window.open(liveDemoLink);
    }
  }
  return (
    <>
      <Card
        className='project-card'
        cover={
          <div>
            <img
              className='project-card_img'
              alt={`${title} img`}
              src={img}
            />
          </div>
        }
        actions={[
          <>
            <Tooltip title="Click to see the source code" placement='bottom'>
              <Button type='default' size='large' className='project-github-btn' onClick={() => handleGithubClick(title)}>Github</Button>
            </Tooltip>
          </>,
          <>
            <Tooltip title="Click to view website" placement='bottom'>
              <Button type='primary' size='large' className='project-live-demo-btn' onClick={() => handleLiveDemoClick(title)} >Live Demo</Button>
            </Tooltip>
          </>
        ]}

      >
        <h2 className='project-title'>{title}</h2>
      </Card>
    </>

  )
}

export default ProjectCard;
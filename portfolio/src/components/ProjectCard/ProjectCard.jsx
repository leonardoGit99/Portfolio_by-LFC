import React from 'react';
import { Button, Card, Modal, Tooltip, message } from 'antd';
import { UserOutlined, KeyOutlined, CopyOutlined } from '@ant-design/icons';
import './projectCardStyles.css';

function ProjectCard({ title, img, githubLink, liveDemoLink, isDarkMode }) {

  const credentials = {
    bettystore: {
      admin: ["betty2023admin", "AdminBetty1#"],
      seller: ["daril2023vendedor", "VendDaril2&/"]
    }
  }

  const handleGithubClick = (project) => {
    if (project == "BettyStore") {
      window.open(githubLink);
    } else if (project == "EzRental") {
      window.open(githubLink);
    } else if (project == "TaskFlow") {
      window.open(githubLink);
    }
  }

  const handleLiveDemoClick = (project) => {
    if (project == "BettyStore") {
      Modal.confirm({
        title: 'BettyStore access credentials',
        content: (
          <div className='modal-credentials-content'>
            <div className='credentials-container'>
              <div>
                <p><span className='credentials'><UserOutlined /> Administrator: </span> betty2023admin</p>
                <p><span className='credentials'><KeyOutlined /> Pass: </span>AdminBetty1#</p>
              </div>
              <Button size='small' onClick={() => copyToClipboard(credentials.bettystore.admin[0], credentials.bettystore.admin[1])}><CopyOutlined /></Button>
            </div>
            <div className='credentials-container'>
              <div>
                <p><span className='credentials'><UserOutlined /> Seller: </span> daril2023vendedor</p>
                <p><span className='credentials'><KeyOutlined /> Pass: </span> VendDaril2&/</p>
              </div>
              <Button size='small' onClick={() => copyToClipboard(credentials.bettystore.seller[0], credentials.bettystore.seller[1])}><CopyOutlined /></Button>
            </div>
          </div>
        ),
        onOk() {
          window.open(liveDemoLink);
        },
      });
    } else if (project == "EzRental") {
      Modal.confirm({
        title: "EzRental access credentials",
        content: "Create your account or sign in with Google",
        onOk() {
          window.open(liveDemoLink);
        },
      });
    } else if (project == "TaskFlow") {
      Modal.confirm({
        title: <>P.E.R.N stack <span className='subtitle-task-flow-modal'>(PostgreSQL || Express || React || NodeJs)</span></>,
        content: "TaskFlow is a task management platform designed to simplify daily life. With an intuitive and efficient interface, you can create, read, update and delete tasks with ease.",
        onOk() {
          window.open(liveDemoLink);
        },
      });
    }
  }

  const copyToClipboard = (username, password) => {
    const credentials = `User: ${username}\nPass: ${password}`;
    navigator.clipboard.writeText(credentials)
      .then(() => {
        message.info("Credentials copied to clipboard", 1);
      })
      .catch(err => {
        message.error("Error copying credentials, try again", 1);
      });
  }

  return (
    <>
      <Card
        className={isDarkMode?'project-card project-card__dark-mode':'project-card'}
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
              <Button type='default' size='large' className={isDarkMode? 'project-github-btn btn-secondary__dark-mode':'project-github-btn'} onClick={() => handleGithubClick(title)}>Github</Button>
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
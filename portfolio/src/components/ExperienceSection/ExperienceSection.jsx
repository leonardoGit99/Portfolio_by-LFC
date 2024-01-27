import React from 'react';
import { List } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs, faJava, faNode, faHtml5, faCss3Alt, faReact, faBootstrap, faPhp, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import './experienceSectionStyles.css';

function ExperienceSection({ handleArrowClick, arrowIcon }) {
  const frontendList = [
    { icon: <FontAwesomeIcon icon={faHtml5} />, label: 'HTML', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faCss3Alt} />, label: 'CSS', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faJs} />, label: 'JavaScript', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faReact} />, label: 'ReactJs', level: 'Experienced' },
    { icon: <AntDesignOutlined />, label: 'Ant Design', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faBootstrap} />, label: 'Bootstrap', level: 'Intermediate' },
  ]

  const backendList = [
    { icon: <FontAwesomeIcon icon={faNode} />, label: 'NodeJs', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faJava} />, label: 'Java', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faDatabase} />, label: 'PostgreSQL', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faPhp} />, label: 'PHP', level: "Basic" },
    { icon: <FontAwesomeIcon icon={faGitAlt} />, label: 'Git', level: 'Experienced' },
  ]


  return (
    <section id="experience">
      <div className='experience-main-text'>
        <p className='experience_p1'>Explore My</p>
        <h1 className='title-experience'>Experience</h1>
      </div>

      <div className='experience-containers'>
        <div className='frontend-experience'>
          <div className='frontend-experience_title'>
            <h3 className='experience-subtitle'>Frontend Development</h3>
          </div>
          <div className='frontend-experience-list'>
            <List
              grid={{
                column: 2,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 2,
                xxl: 2,
              }}
              dataSource={frontendList}
              renderItem={(item, index) => (
                <List.Item key={index} className='frontend-list-item-flex-container'>
                  <div className='frontend-list-item'>
                    <div className='frontend-icon'>
                      {item.icon}
                    </div>
                    <div className='frontend-text'>
                      <div className='frontend-label'>
                        <h3>{item.label}</h3>
                      </div>
                      <div className='frontend-level'>
                        <p>{item.level} </p>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            >
            </List>
          </div>
        </div>
        <div className='backend-experience'>
          <div className='backend-experience_title'>
            <h3 className='experience-subtitle'>Backend Development</h3>
          </div>
          <div className='backend-experience_list'>
            <div className='backend-experience-list'>
              <List
                grid={{
                  column: 2,
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 2,
                  xl: 2,
                  xxl: 2,
                }}
                dataSource={backendList}
                renderItem={(item, index) => (
                  <List.Item key={index} className='backend-list-item-flex-container'>
                    <div className='backend-list-item'>
                      <div className='backend-icon'>
                        {item.icon}
                      </div>
                      <div className='backend-text'>
                        <div className='backend-label'>
                          <h3>{item.label}</h3>
                        </div>
                        <div className='backend-level'>
                          <p>{item.level}</p>
                        </div>
                      </div>
                    </div>
                  </List.Item>
                )}
              >
              </List>
            </div>
          </div>
        </div>
        <img
          className='arrow-icon'
          src={arrowIcon}
          alt='arrow icon'
          onClick={() => handleArrowClick("projects")}
        />
      </div>
    </section>
  )
}

export default ExperienceSection
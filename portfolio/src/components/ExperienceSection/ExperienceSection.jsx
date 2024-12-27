import React from 'react';
import { List } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faN, faT } from '@fortawesome/free-solid-svg-icons';
import { faJs, faJava, faNode, faHtml5, faCss3Alt, faReact, faBootstrap, faPhp, faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons';
import '../../components/styles/globalStyles.css';
import './experienceSectionStyles.css';
function ExperienceSection({ handleArrowClick, arrowIcon, isDarkMode }) {
  const frontendList = [
    { icon: <FontAwesomeIcon icon={faJs} />, label: 'Javascript', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faJs} />, label: 'TypeScript', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faReact} />, label: 'ReactJs', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faN} />, label: 'Nextjs', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faT} />, label: 'Tailwind', level: 'Intermediate' },
    { icon: <AntDesignOutlined />, label: 'Ant Design', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faBootstrap} />, label: 'Bootstrap', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faFigma} />, label: 'Figma', level: 'Experienced' },
  ]

  const backendList = [
    { icon: <FontAwesomeIcon icon={faNode} />, label: 'NodeJs', level: 'Experienced' },
    { icon: <FontAwesomeIcon icon={faNode} />, label: 'Express', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faDatabase} />, label: 'PostgreSQL', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faJava} />, label: 'Java', level: 'Intermediate' },
    { icon: <FontAwesomeIcon icon={faPhp} />, label: 'PHP', level: "Intermediate" },
    { icon: <FontAwesomeIcon icon={faGitAlt} />, label: 'Git', level: 'Experienced' },
  ]


  return (
    <section id="experience">
      <div className='experience-main-text'>
        <p className='experience_p1'>Explore My</p>
        <h1 className={isDarkMode ? 'section-title section-title__dark-mode' : 'section-title'}>Experience</h1>
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
                    <div className={isDarkMode ? 'frontend-icon icon__dark-mode' : 'frontend-icon'}>
                      {item.icon}
                    </div>
                    <div className='frontend-text'>
                      <div className={isDarkMode ? 'frontend-label tag__dark-mode' : 'frontend-label'}>
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
                      <div className={isDarkMode ? 'backend-icon icon__dark-mode' : 'backend-icon'}>
                        {item.icon}
                      </div>
                      <div className='backend-text'>
                        <div className={isDarkMode ? 'backend-label tag__dark-mode' : 'backend-label'}>
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
      </div>
      <img
        className={isDarkMode? 'arrow-icon arrow-icon__dark-mode':'arrow-icon'}
        src={arrowIcon}
        alt='arrow icon'
        onClick={() => handleArrowClick("projects")}
      />
    </section>
  )
}

export default ExperienceSection
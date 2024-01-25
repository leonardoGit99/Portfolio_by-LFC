import React from 'react';
import { List } from 'antd';
import { WifiOutlined } from '@ant-design/icons';
import './experienceSectionStyles.css';

function ExperienceSection() {
  const frontendList = [
    { icon: <WifiOutlined />, label: "HMTL" },
    { icon: <WifiOutlined />, label: "CSS" },
    { icon: <WifiOutlined />, label: "CSS" },
    { icon: <WifiOutlined />, label: "ReactJs" },
    { icon: <WifiOutlined />, label: "Ant Design" },
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
            <h3>Frontend Development</h3>
          </div>
          <div className='frontend-experience_list'>
            <List
              style={{width:'40%'}}
              grid={{
                column: 2,
                xs: 2,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
              }}
              dataSource={frontendList}
              renderItem={(item, index) => (
                <List.Item key={index} >
                  {item.icon} {item.label}
                </List.Item>
              )}
            >
            </List>
          </div>
        </div>
        <div className='backend-experience'>
          <div className='backend-experience_title'>
            <h3>Backend Development</h3>
          </div>
          <div className='backend-experience_list'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
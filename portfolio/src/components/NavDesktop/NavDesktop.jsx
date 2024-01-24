import React from 'react'
import { Menu } from 'antd';
import './navDesktopStyles.css';

function NavDesktop({ items, selectedTab, setSelectedTab }) {
  
  return (
    <>
      <Menu
        className='nav-desktop'
        items={items}
        mode='horizontal'
        onClick={(e) => setSelectedTab(e.key)}
        defaultSelectedKeys={[selectedTab]}
      >
      </Menu>
    </>
  )
}

export default NavDesktop;
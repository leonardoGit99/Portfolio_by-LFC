import React from 'react'
import { Anchor, Menu } from 'antd';
import './navDesktopStyles.css';

function NavDesktop({ items, selectedTab, setSelectedTab, isDarkMode }) {
  const { Link: AnchorLink } = Anchor;

  return (
    <>
      <Menu
        className={isDarkMode? 'nav-desktop nav-desktop__dark-mode': 'nav-desktop'}
        items={items}
        theme='light'
        mode='horizontal'
        onClick={(e) => setSelectedTab(e.key)}
        defaultSelectedKeys={[selectedTab]}
      >
      </Menu>
    </>
  )
}

export default NavDesktop;
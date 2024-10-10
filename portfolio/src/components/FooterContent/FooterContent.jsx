import React from 'react';
import { Menu } from 'antd';
import './footerContentStyles.css';

function FooterContent({ items, selectedTab, setSelectedTab, isDarkMode }) {
  return (
    <div className={isDarkMode ? "footer-container footer-container__dark-mode" : "footer-container"}>
      <div className='nav-desktop-footer'>
        <Menu
          className={isDarkMode ? 'nav-footer nav-footer__dark-mode' : 'nav-footer'}
          items={items}
          theme='light'
          mode='horizontal'
          onClick={(e) => setSelectedTab(e.key)}
          defaultSelectedKeys={[selectedTab]}
        >
        </Menu>
      </div>
      <p className='footer-p1'>Copyright &copy; {new Date().getFullYear()} Leonardo Fuentes C. All Rigths Reserved.</p>
    </div>
  );
};

export default FooterContent;

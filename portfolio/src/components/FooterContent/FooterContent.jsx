import React from 'react';
import { Menu } from 'antd';
import './footerContentStyles.css';

function FooterContent({ items, selectedTab, setSelectedTab }) {
  return (
    <div className="footer-container">
      <div className='nav-desktop-footer'>
      <Menu
        className='nav-footer'
        items={items}
        mode='horizontal'
        onClick={(e) => setSelectedTab(e.key)}
        defaultSelectedKeys={[selectedTab]}
      >
      </Menu>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()} Leonardo Fuentes C. All Rigths Reserved.</p>
    </div>
  );
};

export default FooterContent;

import React from 'react'
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './navMobileStyles.css';

function NavMobile({ visible, showDrawer, closeDrawer, items, selectedTab, setSelectedTab }) {
  const burgerButton = [
    { key: "burguerButton", icon: !visible ? <MenuOutlined className='burger-icon' onClick={showDrawer} /> : null },
  ]

  const handleMenuClick = (e) => {
    setSelectedTab(e.key);
    closeDrawer();
  }
  return (
    <>
      <div className="mobile-menu-icon">
        {burgerButton.map(button => (
          <span key={button.key}>
            {button.icon}
          </span>
        ))}
      </div>

      <Drawer
        className='drawer'
        title="Portfolio LFC"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        open={visible}
        width={200}
      >
        <Menu
          className='nav-mobile'
          items={items}
          mode='vertical'
          onClick={(e) => handleMenuClick(e)}
          defaultSelectedKeys={[selectedTab]}
        >
        </Menu>
      </Drawer>

    </>
  )
}

export default NavMobile
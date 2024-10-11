import React from 'react'
import { Menu, Drawer, Switch } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import './navMobileStyles.css'

function NavMobile({ visible, showDrawer, closeDrawer, items, selectedTab, setSelectedTab, isDarkMode, onChangeDarkMode }) {
  const burgerButton = [
    { key: "burguerButton", icon: !visible ? <MenuOutlined className={isDarkMode ? 'burger-icon burger-icon__dark-mode' : 'burger-icon'} onClick={showDrawer} /> : null },
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
        className={isDarkMode ? 'drawer drawer__dark-mode' : 'drawer'}
        title={
          <div className='title-drawer'>
            <span>Portfolio LFC</span>
            <Switch
              size='small'
              onChange={onChangeDarkMode}
              checked={isDarkMode}
              checkedChildren={<MoonFilled />}
              unCheckedChildren={<SunFilled />}
            />
          </div>
        }
        placement="right"
        closable={true}
        onClose={closeDrawer}
        open={visible}
        width={"60%"}
      >
        <Menu
          className={isDarkMode ? 'nav-mobile nav-movile__dark-mode' : 'nav-mobile'}
          items={items}
          mode='vertical'
          theme={isDarkMode ? 'dark' : 'light'}
          onClick={(e) => handleMenuClick(e)}
          defaultSelectedKeys={[selectedTab]}
        >
        </Menu>
      </Drawer>

    </>
  )
}

export default NavMobile
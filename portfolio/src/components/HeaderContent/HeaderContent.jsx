import React, { useState, useEffect } from 'react';
import NavDesktop from '../NavDesktop/NavDesktop';
import NavMobile from '../NavMobile/NavMobile';
import { Switch } from 'antd';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import './headerContentStyles.css';

function HeaderContent({ visible, showDrawer, closeDrawer, items, selectedTab, setSelectedTab, isDarkMode, onChangeDarkMode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  console.log(isDarkMode);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={isDarkMode ? "header-container header-container__dark-mode" : "header-container"}>
      <div className={isDarkMode ? "logo logo__dark-mode" : "logo"}>
        Leonardo Fuentes C.
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          {!isMobile ?
            <>
              <NavDesktop
                isDarkMode={isDarkMode}
                items={items}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
              <Switch
                size='small'
                onChange={onChangeDarkMode}
                checked={isDarkMode}
                checkedChildren={<MoonFilled />}
                unCheckedChildren={<SunFilled />}
              />
            </>
            :
            <NavMobile
              isDarkMode={isDarkMode}
              onChangeDarkMode={onChangeDarkMode}
              visible={visible}
              showDrawer={showDrawer}
              closeDrawer={closeDrawer}
              items={items}
              setSelectedTab={setSelectedTab}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
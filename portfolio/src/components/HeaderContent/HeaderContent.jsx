import React, { useState, useEffect } from 'react';
import NavDesktop from '../NavDesktop/NavDesktop';
import NavMobile from '../NavMobile/NavMobile';
import './headerContentStyles.css';

function HeaderContent({ visible, showDrawer, closeDrawer, items, selectedTab, setSelectedTab }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
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
    <div id="contact" className="header-container">
      <div className="logo">
        Leonardo Fuentes C.
      </div>
      <div>
        {!isMobile ?
          <NavDesktop
            items={items}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          :
          <NavMobile
            visible={visible}
            showDrawer={showDrawer}
            closeDrawer={closeDrawer}
            items={items}
            setSelectedTab={setSelectedTab}
          />
        }
      </div>
    </div>
  );
}

export default HeaderContent;
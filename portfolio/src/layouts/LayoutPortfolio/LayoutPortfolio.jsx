import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout, Anchor } from 'antd';
import { UserOutlined, RiseOutlined, CodeOutlined, ContactsOutlined } from '@ant-design/icons';
import HeaderContent from '../../components/HeaderContent/HeaderContent';
import FooterContent from '../../components/FooterContent/FooterContent';
import { useStore } from '../../store/useStore';
import './layoutPortfolioStyles.css';

function LayoutPortfolio() {
  const { Header, Content, Footer } = Layout;
  const { Link: AnchorLink } = Anchor;
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;
  const { isDarkMode, toggleDarkMode } = useStore();

  const showDrawer = () => {
    setVisible(true);
  }

  const closeDrawer = () => {
    setVisible(false);
  }

  const items = [
    {
      key: "about",
      label: (
        <div style={{ display: 'flex', gap: '14px', color: isDarkMode ? '#f5f5f5' : '' }}>
          <UserOutlined />
          <AnchorLink href="#about" title="About" />
        </div>)
    }, {
      key: "experience",
      label: (
        <div style={{ display: 'flex', gap: '14px', color: isDarkMode ? '#f5f5f5' : '' }}>
          <RiseOutlined />
          <AnchorLink href="#experience" title="Experience" />
        </div>)
    }, {
      key: "projects",
      label: (
        <div style={{ display: 'flex', gap: '14px', color: isDarkMode ? '#f5f5f5' : '' }}>
          <CodeOutlined />
          <AnchorLink href="#projects" title="Projects" />
        </div>)
    }, {
      key: "contact",
      label: (
        <div style={{ display: 'flex', gap: '14px', color: isDarkMode ? '#f5f5f5' : '' }}>
          <ContactsOutlined />
          <AnchorLink href="#contact" title="Contact" />
        </div>)
    }
  ];

  // Eliminar la key seleccionada del almacenamiento local del navegador cada vez que se inicia la pagina
  localStorage.removeItem("selectedTab");

  // Obtener la key seleccionada del almacenamiento local del navegador
  const [selectedTab, setSelectedTab] = useState(localStorage.getItem("selectedTab") || currentRoute);
  localStorage.setItem("selectedTab", selectedTab);

  // Actualiza la key seleccionada en el almacenamiento local del navegador
  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  const onChangeDarkMode = (checked) => {
    if (checked) {
      toggleDarkMode();
    } else {
      toggleDarkMode();
    }
  }



  return (
    <Layout className={isDarkMode ? 'app-layout app-layout__dark-mode' : 'app-layout'}>
      <Header className="app-header">
        <HeaderContent
          isDarkMode={isDarkMode}
          onChangeDarkMode={onChangeDarkMode}
          visible={visible}
          showDrawer={showDrawer}
          closeDrawer={closeDrawer}
          items={items}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </Header>
      <Content className="app-content-container" >
        <Outlet />
      </Content>
      <Footer className="app-footer-container">
        <FooterContent
          isDarkMode={isDarkMode}
          items={items}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </Footer>
    </Layout>
  )
}

export default LayoutPortfolio;
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { UserOutlined, RiseOutlined, CodeOutlined, ContactsOutlined } from '@ant-design/icons';
import HeaderContent from '../../components/HeaderContent/HeaderContent';
import FooterContent from '../../components/FooterContent/FooterContent';
import './layoutPortfolioStyles.css';

function LayoutPortfolio() {
  const { Header, Content, Footer } = Layout;
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;

  const showDrawer = () => {
    setVisible(true);
  }

  const closeDrawer = () => {
    setVisible(false);
  }

  const items = [
    { key: "#about", label: (<Link to="#about">About</Link>), icon: <UserOutlined /> },
    { key: "#experience", label: (<Link to="#experience">Experience</Link>), icon: <RiseOutlined /> },
    { key: "#projects", label: (<Link to="#projects">Projects</Link>), icon: <CodeOutlined /> },
    { key: "#contact", label: (<Link to="#contact">Contact</Link>), icon: <ContactsOutlined /> },
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
  return (
    <Layout className="app-layout-container">
      <Header className="app-header-container">
        <HeaderContent
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
          items={items}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </Footer>
    </Layout>
  )
}

export default LayoutPortfolio;
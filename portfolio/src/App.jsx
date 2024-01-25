import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPortfolio from './layouts/LayoutPortfolio/LayoutPortfolio';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutPortfolio />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

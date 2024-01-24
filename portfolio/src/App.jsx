import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPortfolio from './layouts/LayoutPortfolio/LayoutPortfolio';
import './App.css';
import Portfolio from './pages/Portfolio';

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

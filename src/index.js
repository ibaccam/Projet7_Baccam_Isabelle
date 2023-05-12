import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./sass/index.css";

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Card from './pages/Card.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/About" element= {<About/>} />
        <Route path="/logement" element={<Card />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
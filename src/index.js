import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./sass/style.css";

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/About" element= {<About/>} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
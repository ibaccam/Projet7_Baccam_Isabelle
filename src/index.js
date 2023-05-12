import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/index.css";

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Card from './pages/Card.jsx'
import ErrorPage from './pages/ErrorPage.jsx'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} errorElement = {<ErrorPage/>}/>
        <Route path="/about" element= {<About/>} errorElement = {<ErrorPage />}/>
        <Route path="/logement" element={<Card />} errorElement= {<ErrorPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
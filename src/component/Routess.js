import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Challan from './Challan';

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/challan" element={<Challan />} />
      </Routes>
    </div>
  )
}

export default Routess

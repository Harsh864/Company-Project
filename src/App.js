import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css"
import Navbar from './component/Navbar';
import {Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Challan from './component/Challan';




function App() {
  return (
    <div >
    <Navbar/>
    <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/challan" element={<Challan />} />
      </Routes>
      
    </div>
  );
}

export default App;

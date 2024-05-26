import logo from './logo.svg';
import Layout from './Layout'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import AllProjects from './AllProjects';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Skills from './Skills';
import Education from './Education';


function App() {
  return (
 <>
 <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </Router>
    {/* <Home/>
    <AllProjects/>
    <Skills/>
    <About/>
    <Contact/> */}


     {/* Footer */}
     <div className="footer bg-secondary text-white text-center p-3">
  <p>&copy; 2024 Sanket Auti. All rights reserved.</p>
</div>

    </>
  );
}

export default App;

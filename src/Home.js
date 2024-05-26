import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import the custom CSS file
import AllProjects from './AllProjects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './logo.css'
import info from './data';
import Education from './Education';

const Home = () => {
  return (
  <>
 <img className='logo' src='logo.png'  alt="Logo"></img>
    <div className='homepage-heading'>{info.homepage.title}</div>
    <div  className="experience bg-light p-3 rounded">
    <div className='homepage-description'>
      {info.homepage.description}
      </div>
      </div>
    <AllProjects/>
    <Skills/>
    <About/>
    <Education/>
    <Contact/>
    </>
  );
};

export default Home;

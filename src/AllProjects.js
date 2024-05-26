import React from 'react';
import INFO from './data';
import Home from './Home';
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Skills from './Skills';

const AllProjects = () => {
    return (
      <>
    
       {/* <h2 className="section-title text-secondary">Projects</h2> */}
       <h2 className="section-title text-secondary">Projects</h2>
      <div className="all-projects-container">
         
        {INFO.projects.map((project, index) => (
          <div className="all-projects-project" key={index}>
  
  <div id="projects" className="project">
  <Link to={project.link}>
          <div className="project-container">
            <img src={project.logo} className="project-logo" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-subtitle mb-2 text-body-secondary">{project.description}</p>
              
              <div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{project.linkText}</div>
						</div>
      
            </div>
          </div>
          </Link>
        </div>
  
  
          </div>
        ))}
      </div>

       
      </>
    );
  };



export default AllProjects;

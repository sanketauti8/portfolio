import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import INFO from './data';
import Home from './Home';
import Skills from './Skills';

const AllProjects = () => {
    return (
        <Container id="experience" className="my-5">
            <h2 className="section-title text-secondary">Projects</h2>
            <Row>
                {INFO.projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4 d-flex">
                        <Card className="card-equal-height">
                           
                            <Card.Body>
                            <div className="experience bg-light p-3 rounded">
                                <Card.Title>{project.title}</Card.Title>         
                                <Card.Subtitle className="mb-2 text-muted">TechStack: {project.TechnologyStack}</Card.Subtitle>
                                </div>
                                <Card.Text>{project.description}</Card.Text>
                                <div className="project-link mt-auto">
                                    <div className="project-link-icon">
                                        <FontAwesomeIcon icon={faLink} />
                                    </div>
                                    <div className="project-link-text">
                                    <Link to={project.link}>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            {project.linkText}
                                        </a>
                                    </Link> 
                                    </div>
                                     <div className="project-link-text"> 
                                 <Link to={project.livelink}> 
                        <a href={project.livelink} target="_blank" rel="https://github.com/sanketauti8">{project.livelink}</a>                                        
                                     </Link> 
                                    </div>
  
                                </div>
                            </Card.Body>
                          
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AllProjects;

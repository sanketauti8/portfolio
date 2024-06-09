import React from 'react'

const Skills = () => {
  return (
    <>
     {/* Skills Section */}
     <div id="skills" className="container my-5">
        <h2 className="section-title text-secondary">Skills</h2>
        <div className="experience bg-light p-3 rounded">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-primary">Programming Languages</h5>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C/C++</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-primary">Web Development</h5>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Flask</li>
              <li>HTML & CSS</li>
              <li>Bootstrap</li>
              <li>Apigee</li>
              <li>REST/SOAP API</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-primary">Tools & Technologies</h5>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS- elastic beanstalk, ec2, S3</li>
              <li>Vercel</li>
              <li>Redis</li>
              <li>Render</li>
              <li>SQL & NoSQL Databases</li>
              <li>Postman</li>
              <li>Swagger</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Skills
import React from 'react'

const Education = () => {
  return (
  <>
  {/* Education Section */}
  <div id="education" className="container my-5">
        <h2 className="section-title text-secondary">Education</h2>
        <div className="education bg-light p-3 rounded">
          <h5 className="text-primary">Master of Science in Computer Science</h5>
          <p><em>California State University, Fullerton. [ January 2023 - December 2024 ]</em></p>
          <p>GPA: 3.78/4.0</p>
        </div>
        <div className="education bg-light p-3 rounded mt-3">
          <h5 className="text-primary">Bachelor of Engineering in Computer Engineering</h5>
          <p><em>Savitribai Phule Pune University, Pune. [ July 2017 - June 2021 ]</em></p>
          <p>GPA: 8.11/10</p>
        </div>
      </div>
  </>
  )
}

export default Education
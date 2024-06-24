import React from 'react'

const About = () => {
  return (
   <>

<div id="experience" className="container my-5">
        <h2 className="section-title text-secondary">Experience</h2>
        <div className="experience bg-light p-3 rounded">
          <h5 className="text-primary">Software Developer at Bitwise Solutions, Pune India</h5>
          <p><em>March 2021 - November 2022</em></p>
          <ul>
  <li>Implemented diverse 'Automated Merchant Boarding Products' utilizing Apigee proxies for various transaction types, expediting
enterprise merchant onboarding by 90%, positively impacting 2 million users</li>
  <li>Implemented Pub/Sub for asynchronous request handling, enhancing merchant webhook processing and enabling the creation of
various accounts and platforms on the merchant portal, reducing processing time by 25%</li>
  <li>Developed 'Order a Device' flow, facilitating seamless purchase of multiple POS devices, enhancing merchant efficiency by 75%</li>
<li>Programmed KYC functionality for Automated Merchant Boarding and Transaction APIs, reducing onboarding time by 40%
</li>
<li>Worked on the Multi-Action framework, reducing internal payment device and terminal onboarding time by 40% through dynamic
request generation</li>
<li>Crafted extensive Swagger documentation & streamlined code management using Git</li>
</ul>
        </div>
      </div>
   </>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
   <>

<div id="experience" className="container my-5">
        <h2 className="section-title text-secondary">Experience</h2>
        <div className="experience bg-light p-3 rounded">
          <h5 className="text-primary">Software Developer at Bitwise Solutions, Pune India</h5>
          <p><em>January 2021 - December 2022</em></p>
          <ul>
  <li>Automated the Merchant Boarding process by developing REST APIs using Apigee, JavaScript, and Spring Boot, reducing
onboarding time by 70%. Implemented a Pub/Sub mechanism to handle asynchronous requests efficiently</li>
  <li>Developed five dynamic merchant products, allowing merchants to configure transaction account types, payment
gateways, and permissions through predefined enum values. This automation reduced manual intervention by 99%</li>
  <li>Integrated the 'Order a Device' feature, enabling 100% of merchants to seamlessly order POS devices through
merchant portal. Automated workflows to eliminate manual intervention, enhancing operational efficiency & scalability.</li>
<li>Played key role in Re-Architecture of KYC(Know Your Customer) feature to validate customer’s SSN, Merchant ID, Bank
details, Phone and address details, reducing fraud risk by 40% and improving compliance and security</li>
<li>Contributed in developing a webhook to capture third-party transaction completion events, parse data, and store
transaction details in the Cloud SQL database, enabling real-time updates and improving system efficiency by 25%.</li>
<li>Developed 5 transaction REST API endpoints such as sale, refund, split, reverse split and reverse payments, integrating
with payment gateway to process both Card Present (CP) and Card Not Present (CNP) type transactions.
</li>
</ul>
        </div>
      </div>
   </>
  )
}

export default About

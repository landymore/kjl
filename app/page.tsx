import React from 'react'
import Header from './components/Header'

export default function Home() {
  return (
  <> 
    <Header />
    <main>
      <div className="container">
        <div>
          <h1>IT Professional</h1>
          <p>Motivated problem solver and TOGAF Certified Enterprise Architect.</p>
        </div>
        <br/>
        <article>
          <header>Enterprise Architecture</header>
          <ul>
            <li>TOGAF 10 Foundation, Practitioner & Applied Practitioner</li>
            <li>Co-Lead Software Engineering Domain Community of Practice</li>
            <li>Sit on Architecture Review Board as an approver</li>
          </ul>
        </article>
        <article>
          <header>Enterprise DevOps</header>
          <ul>
            <li>Implement enterprise scale CI / CD solutions</li>
            <li>Establish reusable patterns, clear standards, and helpful templates</li>
            <li>Implement governance to support regulatory compliance while maintaining agility</li>
            <li>Produce live interactive sessions to promote skills and patterns</li>
            <li>Focus on security and availability</li>            
          </ul>
        </article>
        <article>
          <header>Utility Specific</header>
          <ul>
            <li>Customer Choice Aggregation</li>
            <li>Clean Transportation and EV Solutions</li>
            <li>Smart Meter and Meter Data Management</li>
            <li>Contact Center</li>
            <li>Customer Privacy</li>
          </ul>
        </article>
      </div>
    </main>
    <footer>
      <div className="footertext">&#169; Kevin J Landymore</div>
    </footer>
  </>
  )
}

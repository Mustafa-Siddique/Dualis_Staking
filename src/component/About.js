import React from 'react'
import aboutImg from '../images/vault.png'

export default function About() {
  return (
    <div>
      <div id='about-cont' className='position-relative py-5'>
        <div className="row my-5">
          {/* <div className="col-md-6 justify-content-center align-content-center" id='aboutImg'>
            <img src={aboutImg} alt="" />
          </div> */}
          {/* <div className="col-md-6"> */}
            <h2>What Makes <span style={{color:"#ffcc00"}}>Dualis Finance</span> Different?</h2>
            <div className="col-md-6 mt-3">
              <h3>A One-Stop Platform</h3>
              <p>$DUALIS is building a platform to bring investors a number of GOOD options to choose from. A One-Stop platform to find the most Legit Devs and their projects, with a detailed insight into their previous, current and upcoming projects.</p>
            </div>
            <div className="col-md-6 mt-3">
              <h3>An extra layer of protection</h3>
              <p>Utilizing Trap-Points system $DUALIS display the most legit devs and projects on the SAFE HAVEN platform. $DUALIS holders who invest in projects listed on that platform will see their investment insured by BoobyTrap reimbursed should any fraud take place.</p>
            </div>
            <div className="d-flex py-3 mt-5 fw-normal" id='aboutList'>
              <ul>
                <li>TRAP POINTS SYSTEM</li>
                <li>COMMUNITY GOVERNANCE MODEL</li>
                <li>DUAL LAYERED PROTECTION</li>
                <li>SAFE HAVEN PLATFORM</li>
              </ul>
              <ul>
                <li>DUALIS FINANCE PLATFORM</li>
                <li>$DUALIS SQUARE -FREELANCING ON DeFi</li>
                <li>INSURANCE DAO - MAKING SECURE DEFI A REALITY</li>
              </ul>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

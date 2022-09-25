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
              <p>DUALIS FINANCE is building a platform to bring investors a number of GOOD options to choose from. A One-Stop Staking platform.</p>
            </div>
            <div className="col-md-6 mt-3">
              <h3>An extra layer of protection</h3>
              <p>Utilizing $DUALIS on the Staking platform. $DUALIS holders will be insured by Dualis Finance reimbursed should any fraud take place.</p>
            </div>
            <div className="d-flex py-3 mt-5 fw-normal" id='aboutList'>
              <ul>
                <li>SECURITY AUDITED SYSTEM</li>
                <li>DUAL LAYERED PROTECTION</li>
                <li>STAKING PLATFORM</li>
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

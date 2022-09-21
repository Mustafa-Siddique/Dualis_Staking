import React from 'react'
import {Link} from 'react-router-dom'

export default function Vetted() {
  return (
    <div id='vettedCont'>
        <div className="row">
            <div className="col-md-4 px-2 text-center">
                <h3>Vetted Projects</h3>
                <p>Our safe haven platform will ony list vetted projects where investors can invest without having to worry about Rugpulls &amp; Honeypots</p>
            </div>
            <div className="col-md-4 px-2 text-center">
                <h3>Exclusive Access</h3>
                <p>Only $DUALIS Hodlers will be able to access safe haven. They would be the first to know about upcoming PROMISING and SAFU projects on BSC.</p>
            </div>
            <div className="col-md-4 px-2 text-center">
                <h3>Scammers Booby-Trapped</h3>
                <p>Our “DUALIS FINANCE” Dashboard will list all potential scams (Rugpulls &amp; Honeypots) to help our community stay away from Frauds on DEFI.</p>
            </div>
        </div>
        <div style={{width:"fit-content", margin:"auto"}}>
            <Link to="/docs" className="btn btnYellow">FAQs</Link>
        </div>
    </div>
  )
}

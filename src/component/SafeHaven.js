import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import PlatformHead from "./PlatformHead";
import Safecards from "./Safecards";
import SafeOwners from "./SafeOwners";
import SidebarSlide from "./SidebarSlide";
import {GiHamburgerMenu} from 'react-icons/gi'
import { getBBTBalance } from './../Web3_connection/ContractMethods'
import InEligible from './InEligible'

export default function SafeHaven() {
  const [activeTab, setActiveTab] = useState(1);
  const [bbtBalance, setBBTBalance] = useState(0);

  const toggleActive = (num) => {
    setActiveTab(num);
  };

  useEffect(async () => {
    const init = async () => {
      const balance = await getBBTBalance();
      setBBTBalance(balance)
      console.log("Balance",balance)
    }
    try{
      setInterval(()=>{
        init();
      },4000)
    }
    catch (e) {
      console.log("error", e)
    }
  }, [window.provide])

  console.log("Balance is safeheaver", bbtBalance)
  const [lg, setlg] = useState(false)

  return (
    <div style={{display:"flex",}}>
        <SidebarSlide lg={lg}/>
      <div className="globalCont">
      <PlatformHead/>
      <button id="pro-sidebar-burger" onClick={() => {setlg(!lg)}}><GiHamburgerMenu/></button>
        {bbtBalance && bbtBalance >= 15000 ?
          <div
          id="safehaven-cont"
          className="pt-5 position-relative text-light"
          style={{ borderTop: "1px solid #474747", maxWidth: "1150px", margin: "auto", }}
          >
            <h1>SAFE HAVEN</h1>
            <h2>Best Rated in DeFi</h2>
            <p className="fw-normal fs-6">
              0 Trap Points means the safest! lower trap points means safer! Read more
              about{" "}
              <Link
                to="/"
                style={{ color: "#fff" }}
              >
                trap points
              </Link>
            </p>
            <div className="projectTable mt-5">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link
                    className={activeTab === 1 ? "nav-link active" : "nav-link"}
                    aria-current="page"
                    onClick={() => toggleActive(1)}
                    to="/safehaven"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={activeTab === 2 ? "nav-link active" : "nav-link"}
                    onClick={() => toggleActive(2)}
                    to="/safehaven"
                  >
                    Project Owners
                  </Link>
                </li>
              </ul>
              <div className="container-fluid mt-2">
                {activeTab === 1 ? <Safecards /> : <SafeOwners />}
              </div>
            </div>
          </div> : <InEligible />}
      </div>
    </div>
  );
}

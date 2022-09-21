import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import OngoingScam from "./OngoingScam";
import OwnerScam from "./OwnerScam";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";

export default function PageBoobyTrap() {

  const [activeTab, setActiveTab] = useState(1)

  const toggleActive = (num) => {
    setActiveTab(num)
  }

  const [lg, setlg] = useState(false)

  return (
    <div style={{display:"flex",}}>
      <SidebarSlide lg={lg}/>
      <div className="globalCont">
        <PlatformHead />
      <button id="pro-sidebar-burger" onClick={() => {setlg(!lg)}}><GiHamburgerMenu/></button>
        <div id="pagesafe-cont" style={{ borderTop: "1px solid #474747", maxWidth: "1150px", margin: "auto", position: "relative", color: "#fff" }} className="pt-5">
          <h1>BOOBY TRAP</h1>
          <h2>Shoutout against scammers &amp; fraudsters</h2>
          <p className="fw-normal fs-6">
            0 Trap Points means the safest! lower trap points means safer! Read
            more about{" "}
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
                <Link className={activeTab === 1 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => toggleActive(1)} to="/boobytrap">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className={activeTab === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleActive(2)} to="/boobytrap">
                  Project Owners
                </Link>
              </li>
            </ul>
            <div className="container-fluid mt-2">
              {activeTab === 1 ? <OngoingScam /> : <OwnerScam />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

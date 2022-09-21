import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";
import {GiHamburgerMenu} from 'react-icons/gi'

export default function ComingSoon() {

  const [lg, setlg] = useState(false)

  return (
    <div style={{display:"flex",}}>
      <SidebarSlide lg={lg}/>
    <div className="globalCont">
      <PlatformHead />
      <button id="pro-sidebar-burger" onClick={() => {setlg(!lg)}}><GiHamburgerMenu/></button>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <h1>COMING SOON!</h1>
        <p>
          Press here to Navigate to{" "}
          <Link to="/platform/safehaven/safuprojects">Platform</Link> or{" "}
          <a href="/">Home</a>
        </p>
      </div>
    </div>
    </div>
  );
}

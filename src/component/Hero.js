import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
// import hoverImg from '../images/logo.png'
import desert from "../images/cupcake.png";
import audit from "../whitepaper/Booby-Audit.pdf";
import mainVid from "../videos/BBT2.webm";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div id="hero-container">
      <Navbar />
      <div className="row rowHero">
        <div className="col-md-6 align-self-center">
          <div>
            <span>The new age of DeFi</span>
            {/* <h1 style={{ color: "#90BF21", margin: "0" }}></h1> */}
            <h1 className="mt-0">Smart Staker</h1>
            <p>
              $DUALIS offers new performance possibilities by diversifying into
              several pools at the same time with a single click
            </p>
          </div>
          {/* <div className="heroSearch my-4">
            <input type="text" placeholder="Search safu projects..." />
            <BiSearchAlt2 id="searchIco" />
          </div> */}
          <div className="heroBtn mb-3">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xB3eF4bc63a0Ec7889737d9653A12C7F42EdaE09E"
              target="_blank"
              rel="noreferrer"
              className="btnYellow btn"
            >
              BUY $DUALIS
            </a>
            <a
              href="https://poocoin.app/tokens/0xb3ef4bc63a0ec7889737d9653a12c7f42edae09e"
              target="_blank"
              rel="noreferrer"
              className="btnYellow btn ms-2"
            >
              CHART
            </a>
          </div>
          <div className="heroAudit">
            <b>Audit &amp; KYC by:</b> &nbsp;
            <img src={desert} alt="" height="16px" /> &nbsp;
            <a href={audit} target="_blank" rel="noreferrer">
              Desert Finance
            </a>
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <video
            id="mainVid"
            src={mainVid}
            autoPlay="autoplay"
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
}

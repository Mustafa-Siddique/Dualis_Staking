import React, { useState, useEffect } from "react";
import client from "../client";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Influencers() {
  const [lg, setlg] = useState(false)
  const [influencer, setInfluencer] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="influencers"] | order(trapPoints asc) {
              name,
              alias,
              id,
              trappoints,
              slug,
              telegram,
              instagram,
              avgPrice,
              twitter,
              engagementRating,
              roi,
              numProjects,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
          }`
      )
      .then((data) => setInfluencer(data))
      .catch(console.error);
  }, []);

  const renderDev = (influencer, index) => {
    return (
      <div className="ownerCard my-5 col-md-3 shadow fs-6" key={index}>
        <img src={influencer.image.asset.url} alt="" />
        <p className="mb-0">{influencer.trappoints} Trap Points</p>
        <div id="dev-name">{influencer.name}</div>
        <div className="rate">Avg Price: ${influencer.avgPrice}</div>
        <div id="social-dev">
          <a href={influencer.telegram}>
            <FaTelegramPlane size={25} fill={"#fff"} />
          </a>{" "}
          &nbsp;
          <a href={influencer.twitter}>
            <FaTwitter size={25} fill={"#fff"} />
          </a>
          &nbsp;
          <a href={influencer.instagram}>
            <FaInstagram size={25} fill={"#fff"} />
          </a>
        </div>
        <br />
        <Link
          className="btn shadow-sm"
          to={{
            pathname: `/influencers/${influencer.slug.current}/${influencer.id}`,
            state: { id: influencer.id },
          }}
        >
          Details
        </Link>
      </div>
    );
  };
  return (
    <div style={{display:"flex",}}>
      <SidebarSlide lg={lg}/>
      <div className="globalCont">
    <PlatformHead />
      <button id="pro-sidebar-burger" onClick={() => {setlg(!lg)}}><GiHamburgerMenu/></button>
    <div style={{position:"relative", maxWidth:"1150px", margin:"auto", color:"#fff"}}>
      <h1 style={{ borderTop: "1px solid #474747" }} className="pt-5">
        Influencers
      </h1>
      <p className="fw-normal fs-6">
        0 Trap Points means the safest! lower trap points means safer! Read more
        about{" "}
        <Link
          to="/"
          style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
        >
          trap points
        </Link>
      </p>
      <div className="row mt-3" id="owner-card-cont">
        {influencer.map(renderDev)}
      </div>
    </div>
    </div>
    </div>
  );
}

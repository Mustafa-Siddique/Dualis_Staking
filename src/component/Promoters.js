import React, { useState, useEffect } from "react";
import client from "../client";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Promoters() {
  const [lg, setlg] = useState(false)
  const [promoter, setPromoters] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="amagroups" && trappoints < 6] | order(trappoints asc) {
              name,
              alias,
              id,
              slug,
              telegram,
              instagram,
              avgCost,
              twitter,
              engagementRating,
              groupowner,
              trappoints,
              experience,
              tgOwner,
              admin,
              tgAdmin,
              about,
              roi,
              wallet,
              numProjects,
              groupCreated,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
          }`
      )
      .then((data) => setPromoters(data))
      .catch(console.error);
  }, []);

  const renderDev = (promoter, index) => {
    return (
      <div className="ownerCard my-5 col-md-3 shadow fs-6" key={index}>
        <img src={promoter.image.asset.url} alt="" />
        <p className="mb-0">{promoter.trappoints} Trap Points</p>
        <div id="dev-name">{promoter.name}</div>
        <div className="rate">Avg Price: ${promoter.avgCost}</div>
        <div id="social-dev">
          <a href={promoter.telegram}>
            <FaTelegramPlane size={25} fill={"#fff"} />
          </a>{" "}
          &nbsp;
          <a href={promoter.twitter}>
            <FaTwitter size={25} fill={"#fff"} />
          </a>
          &nbsp;
          <a href={promoter.instagram}>
            <FaInstagram size={25} fill={"#fff"} />
          </a>
        </div>
        <br />
        <Link
          className="btn shadow-sm"
          to={{
            pathname: `/promoters/${promoter.slug.current}/${promoter.id}`,
            state: { id: promoter.id },
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
        AMA/Call Channels
      </h1>
      <p className="fs-6 fw-normal">
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
        {promoter.map(renderDev)}
      </div>
    </div>
    </div>
    </div>
  );
}

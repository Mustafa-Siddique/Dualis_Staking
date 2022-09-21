import React, { useState, useEffect } from "react";
import client from "../client";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from "react-router-dom";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";

export default function Devcards() {
  const [lg, setlg] = useState(false)
  const [dev, setDev] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="developers"] | order(trapPoints asc) {
              name,
              alias,
              trappoints,
              id,
              slug,
              telegram,
              twitter,
              github,
              numProjects,
              skills,
              avgPrice,
              otherSkills,
              experience,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
          }`
      )
      .then((data) => setDev(data))
      .catch(console.error);
  }, []);

  const renderDev = (dev, index) => {
    return (
      <div className="ownerCard my-5 col-md-3 shadow fs-6" key={index}>
        <img src={dev.image.asset.url} alt="" />
        <p className="mb-0">{dev.trappoints} Trap Points</p>
        <div id="dev-name">{dev.name}</div>
        <div className="skills">Skills: {dev.skills}</div>
        <div className="rate">Avg Cost: ${dev.avgPrice}</div>
        <div id="social-dev">
          <a href={dev.telegram}>
            <FaTelegramPlane size={25} fill={"#fff"} />
          </a>{" "}
          &nbsp;
          <a href={dev.github}>
            <FaGithub size={25} fill={"#fff"} />
          </a>
        </div>
        <Link
          className="btn shadow-sm"
          to={{
            pathname: `/developers/${dev.slug.current}/${dev.id}`,
            state: { id: dev.id },
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
        <button id="pro-sidebar-burger" onClick={() => { setlg(!lg) }}><GiHamburgerMenu /></button>
        <div style={{ position: "relative", maxWidth: "1150px", margin: "auto", color: "#fff" }}>
          <h1 style={{ borderTop: "1px solid #474747" }} className="pt-5">
            Developers
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
            {dev.map(renderDev)}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import client from "../client";
import probably from '../images/probably.png'
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from "react-router-dom";
import { getTotoalProfile } from "../Web3_connection/ContractMethods";
import { initInstance } from "../Web3_connection/web3_methods";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";

export default function DYORcards() {
  const [project, setProject] = useState([]);
  const [CountProfile, setProfileCount] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type=="lprojects" && trappoints > 2 && trappoints < 8] | order(trapPoints asc) {
              name,
              id,
              tracker,
              slug,
              contract,
              trappoints,
              owner,
              marketingStatus,
              telegram,
              twitter,
              website,
              facebook,
              discord,
              instagram,
              other,
              tgOwner,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              },
              newlyLaunched,
              comStrength,
              devStatus,
              description,
          }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
    const getData = async () => {
      await initInstance();
      const data = await getTotoalProfile();
      setProfileCount(data);
    };
    getData();
  }, []);
  console.log(project)
  console.log("Total profile", CountProfile);

  const [lg, setlg] = useState(false)

  // RENDER PROJECTS
  const renderProjects = (project, index) => {
    return (
      <div
        className="projectCard mx-2 my-4 col-md-3 px-1 py-2 shadow"
        key={index}
      >
        <div id="projectHead" className="d-flex justify-content-between">
          <div className="w-100 text-start" style={{ paddingLeft: "30px" }}>
            <h3 className="fs-6 mt-2 text-start">
              {project.name} <span>({project.tracker})</span>
            </h3>
            <a
              href={project.telegram}
              style={
                project.telegram.length > 2
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaTelegramPlane />
            </a>
            <a
              href={project.twitter}
              style={
                project.twitter.length > 2
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaTwitter />
            </a>
            <a
              href={project.website}
              style={
                project.website.length > 2
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaGlobe />
            </a>
            <a
              href={project.discord}
              style={
                project.discord !== null
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaDiscord />
            </a>
            <a
              href={project.insta}
              style={
                project.instagram !== null
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaInstagram />
            </a>
          </div>

          {/* RIBBON CONTAINER FOR NEWLY LAUNCHED PROJECTS */}
          <div id="ribbon-container" style={project.newlyLaunched === true ? { display: "block" } : { display: "none" }}>
            <span id="ribbon">
              New
            </span>
          </div>
          {/* RIBBON CONTAINER FOR NEWLY LAUNCHED PROJECTS */}
          <div id="bbt-ribbon-container" style={project.trappoints >= 6 ? { display: "block" } : { display: "none" }}>
            <img src={probably} alt="" width="100px" />
          </div>
          <img
            className="shadow bg-light"
            src={project.image.asset.url}
            alt=""
          />
        </div>
        <div id="projectDesc">
          <br />
          <p className="mb-0 card-bold-points">{project.trappoints} Trap Points</p>
          <p className="mb-0">{project.comStrength}k+ Community Strength</p>
          <p>{project.description.length > 150 ? project.description.slice(0, 150) + "..." : project.description}</p>
        </div>
        <Link
          className="btn shadow-sm"
          to={{ pathname: `/ongoing/projects/${project.slug.current}/${project.id}`, state: { id: project.id } }}
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
        <h1 style={{ borderTop: "1px solid #474747", }} className="pt-5">DYOR PROJECTS</h1>
        <h2>Shoutout against scammers &amp; fraudsters</h2>
        <p className="fs-6 fw-normal">
          0 Trap Points means the safest! lower trap points means safer! Read
          more about{" "}
          <Link
            to="/"
            style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
          >
            trap points
          </Link>
        </p>
        <div className="row safuCards">
          {project.map(renderProjects)}
        </div>
      </div>
    </div>
    </div>
  );
}

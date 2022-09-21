import React, { useState, useEffect } from "react";
import client from "../client";
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";
import { getTotoalProfile } from "./../Web3_connection/ContractMethods";
import { initInstance } from "./../Web3_connection/web3_methods";
// import BlockContent from "@sanity/block-content-to-react";

export default function Ownerdetails(props) {
  // OWNER FETCH
  const [singleOwner, setSingleOwner] = useState([]);
  const { slug } = useParams();
  const location = useLocation();
  // console.log("id", location.state.id)

  /* THIS IS TO FETCH THE OWNERS SLUG FROM URL */
  var fetchedOwner = window.location.pathname
    .replace(/[0-9]/g, "")
    .slice(22, -1);
  // var currentOwner = fetchedOwner.replace(/^./, str => str.toUpperCase())
  console.log(fetchedOwner);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        name,
              alias,
              trappoints,
              comStrength,
              numProjects,
              about,
              experience,
              slug,
              avgLife,
              "uprojects":*[_type == "uprojects" && owner._ref in *[_type == "owners" && slug.current == "${fetchedOwner}"]._id]{
                name,
                tracker,
                slug,
                id,
                telegram,
                twitter,
                website,
                discord,
                instagram,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                newlyLaunched,
                description,
              },
              "lprojects":*[_type == "lprojects" && owner._ref in *[_type == "owners" && slug.current == "${fetchedOwner}"]._id]{
                name,
                tracker,
                slug,
                id,
                telegram,
                twitter,
                website,
                discord,
                instagram,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                newlyLaunched,
                description,
              },
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
      }`
      )
      .then((data) => setSingleOwner(data[0]));
  }, [slug]);

  return (
    <div className="row justify-content-center">
      <div
        style={
          window.location.pathname.includes("unknown/16") === true
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div
          className="container-fluid text-start overflow-hidden position-relative marquee"
          style={{
            backgroundColor: "#292B33",
            color: "#A82323",
            height: "24px",
          }}
        >
          <p>
            <b>Disclaimer</b>: Projects where the identity of its owner is
            unknown have been listed under "Unknown Owner". The status will be
            updated once the information on their owner is available.
          </p>
        </div>
      </div>
      <div className="container-fluid text-start fs-6">
        <table className="table table-hover" id="skills">
          <tbody>
            <tr>
              <th>Experience in DeFi:</th>
              <td>{singleOwner.experience} Months+</td>
            </tr>
            <tr>
              <th>Number of Projects till date:</th>
              <td>{singleOwner.numProjects}</td>
            </tr>
            <tr>
              <th>Community Strength:</th>
              <td>{singleOwner.comStrength}k+</td>
            </tr>
            <tr>
              <th>Avg. Life of Projects:</th>
              <td>{singleOwner.avgLife} Months</td>
            </tr>
            <tr>
              <th>About:</th>
              <td>{singleOwner.about}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="mb-5" />

      {/* UPCOMING PROJECTS */}
      <h3
        style={{
          backgroundColor: "#292B33",
          textAlign: "start",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        Upcoming Projects
      </h3>
      <h2
        style={
          Array.isArray(singleOwner.uprojects) &&
          singleOwner.uprojects.length === 0
            ? { display: "block" }
            : { display: "none" }
        }
      >
        No Data Available
      </h2>
      <div className="row justify-content-evenly mb-4">
        {singleOwner.uprojects &&
          singleOwner.uprojects.map((upcoming, index) => {
            return (
              <div
                className="projectCard mx-2 my-4 col-md-3 px-3 pt-2 pb-4 shadow"
                key={index}
              >
                <div id="projectHead" className="d-flex">
                  <div className="m-auto">
                    <h3 className="fs-6 dynName">
                      {upcoming.name} <span>({upcoming.tracker})</span>
                    </h3>
                    <a
                      href={upcoming.telegram}
                      style={
                        upcoming.telegram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTelegramPlane />
                    </a>
                    <a
                      href={upcoming.twitter}
                      style={
                        upcoming.twitter !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={upcoming.website}
                      style={
                        upcoming.website !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href={upcoming.discord}
                      style={
                        upcoming.discord !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaDiscord />
                    </a>
                    <a
                      href={upcoming.instagram}
                      style={
                        upcoming.instagram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  <img
                    className="shadow bg-light"
                    src={upcoming.image.asset.url}
                    alt={upcoming.name}
                  />
                </div>
                <div id="projectDesc">
                  <br />
                  <p>
                    {upcoming.description.length > 150
                      ? upcoming.description.slice(0, 150) + "..."
                      : upcoming.description}
                  </p>
                </div>
                <Link
                  className="btn shadow-sm"
                  to={{
                    pathname: `/safehaven/upcomingprojects/${upcoming.slug.current}/${upcoming.id}`,
                    state: { id: upcoming.id },
                  }}
                >
                  Details
                </Link>
              </div>
            );
          })}
      </div>

      {/* PREVIOUS PROJECTS */}
      <h3
        style={{
          backgroundColor: "#292B33",
          textAlign: "start",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        Previous Projects
      </h3>
      <h2
        style={
          Array.isArray(singleOwner.lprojects) &&
          singleOwner.lprojects.length === 0
            ? { display: "block" }
            : { display: "none" }
        }
      >
        No Data Available
      </h2>

      <div className="row justify-content-evenly">
        {singleOwner.lprojects &&
          singleOwner.lprojects.map((launched, index) => {
            return (
              <div
                className="projectCard mx-2 my-4 col-md-3 px-3 pt-2 pb-4 shadow"
                key={index}
              >
                <div id="projectHead" className="d-flex">
                  <div className="m-auto">
                    <h3 className="fs-6 dynName">
                      {launched.name} <span>({launched.tracker})</span>
                    </h3>
                    <a
                      href={launched.telegram}
                      style={
                        launched.telegram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTelegramPlane />
                    </a>
                    <a
                      href={launched.twitter}
                      style={
                        launched.twitter !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={launched.website}
                      style={
                        launched.website !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href={launched.discord}
                      style={
                        launched.discord !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaDiscord />
                    </a>
                    <a
                      href={launched.instagram}
                      style={
                        launched.instagram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  {/* RIBBON CONTAINER FOR NEWLY LAUNCHED PROJECTS */}
                  <div
                    id="ribbon-container"
                    style={
                      launched.newlyLaunched === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <span id="ribbon">New</span>
                  </div>
                  <img
                    className="shadow bg-light"
                    src={launched.image.asset.url}
                    alt=""
                  />
                </div>
                <div id="projectDesc">
                  <br />
                  <p>
                    {launched.description.length > 150
                      ? launched.description.slice(0, 150) + "..."
                      : launched.description}
                  </p>
                </div>
                <Link
                  className="btn shadow-sm"
                  to={{
                    pathname: `/safehaven/ongoingprojects/${launched.slug.current}/${launched.id}`,
                    state: { id: launched.id },
                  }}
                >
                  Details
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

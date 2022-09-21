import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import client from "../client";
import { initInstance } from './../Web3_connection/web3_methods'
import { getProfile } from "./../Web3_connection/ContractMethods"
import { useParams, useLocation } from "react-router-dom";

export default function Devdetails(props) {
  // console.log("id", location.state.id)

  const [singleDev, setSingleDev] = useState([]);
  const { slug, id } = useParams();
  const location = useLocation();
  // console.log("id", location.state.id)
  const notify = () =>
    toast("Transaction Successful", {
      position: "top-right",
      pauseOnHover: false,
    });

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
                name,
                alias,
                id,
                slug,
                telegram,
                twitter,
                github,
                numProjects,
                skills,
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
      .then((data) => setSingleDev(data[0]));
    const init = async () => {
      await initInstance();
      await getProfile(id);
    };
    init();
  }, [slug]);

  return (
    <div className="row justify-content-center">
      <div className="container-fluid text-start fs-6">
      <table className="table table-hover" id="skills">
          <tbody>
            <tr>
              <th>Experience in DeFi:</th>
              <td>{singleDev.experience}+ Months</td>
            </tr>
            <tr>
              <th>Skills:</th>
              <td>{singleDev.skills}</td>
            </tr>
            <tr>
              <th>Other Skills:</th>
              <td>{singleDev.otherSkills}</td>
            </tr>
            <tr>
              <th>Number of Projects till date:</th>
              <td>{singleDev.numProjects}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

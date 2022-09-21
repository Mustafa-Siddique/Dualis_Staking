import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import client from "../client";
import { initInstance } from './../Web3_connection/web3_methods'
import { addReview, getProfile } from "./../Web3_connection/ContractMethods"
import { Link, useParams, useLocation } from "react-router-dom";

export default function InfluencerDetails() {
  // console.log("id", location.state.id)

  const [singleInfluencer, setSingleInfluencer] = useState([]);
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
            instagram,
            twitter,
            avgPrice,
            experience,
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
      .then((data) => setSingleInfluencer(data[0]));
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
              <th>Return on Investment:</th>
              <td>{singleInfluencer.roi}</td>
            </tr>
            <tr>
              <th>Engagement Rating:</th>
              <td>{singleInfluencer.engagementRating}</td>
            </tr>
            <tr>
              <th>Experience:</th>
              <td>{singleInfluencer.experience}+ Months</td>
            </tr>
            <tr>
              <th>Average Cost:</th>
              <td>${singleInfluencer.avgPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

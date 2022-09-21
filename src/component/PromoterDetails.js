import React, { useState, useEffect } from "react";
import {toast } from 'react-toastify';
import client from "../client";
import { initInstance } from './../Web3_connection/web3_methods'
import {getProfile } from "./../Web3_connection/ContractMethods"
import {useParams, useLocation } from "react-router-dom";
import { start } from "@popperjs/core";

export default function PromoterDetails() {
  // console.log("id", location.state.id)

  const [singlePromoter, setSinglePromoter] = useState([]);
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
          email,
          alias,
          id,
          slug,
          telegram,
          instagram,
          avgCost,
          twitter,
          engagementRating,
          groupowner,
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
      .then((data) => setSinglePromoter(data[0]));
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
              <th>Email:</th>
              <td><a href={`mailto:${singlePromoter.email}`}>{singlePromoter.email}</a></td>
            </tr>
            <tr>
              <th>Owner:</th>
              <td><a href={singlePromoter.tgOwner}>{singlePromoter.groupowner}</a></td>
            </tr>
            <tr>
              <th>Group Created on:</th>
              <td>{singlePromoter.groupCreated}</td>
            </tr>
            <tr>
              <th>Admin:</th>
              <td><a href={singlePromoter.tgAdmin}>{singlePromoter.admin}</a></td>
            </tr>
            <tr>
              <th>Return on Investment:</th>
              <td>{singlePromoter.roi}</td>
            </tr>
            <tr>
              <th>Engagement Rating:</th>
              <td>{singlePromoter.engagementRating}</td>
            </tr>
            <tr>
              <th>Experience:</th>
              <td>{singlePromoter.experience}+ Months</td>
            </tr>
            <tr>
              <th>Average Cost:</th>
              <td>${singlePromoter.avgCost}</td>
            </tr>
            <tr>
              <th>About:</th>
              <td>{singlePromoter.about}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import client from "../client";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import ScriptTag from "react-script-tag";

export default function Projectdetails() {
  const [singleProject, setSingleProject] = useState([]);
  const { slug, id } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
                name,
                email,
                tracker,
                slug,
                contract,
                trappoints,
                audit,
                kyc,
                marketingWallet,
                budget,
                tradingStartDate,
                initialMC,
                launchPrice,
                athMC,
                owner,
                marketingStatus,
                telegram,
                twitter,
                status,
                website,
                facebook,
                discord,
                instagram,
                reditt,
                youtube,
                other,
                tgOwner,
                devwallet,
                teamwallet,
                cmc,
                cg,
                cgId,
                holdersCount,
                exchanges,
                chart,
                expertOpinion,
                lpLocked,
                newlyLaunched,
                comStrength,
                devStatus,
                description,
                verdict,
            }`
      )
      .then((data) => ownername(data[0]));
  }, [slug]);
  console.log("singleProject", singleProject);
  // Fetch owner

  const [ownerName, setOwnerName] = useState([]);
  useEffect(async () => {
    //    await client.fetch(
    //         `*[_id == "${singleProject.owner._ref}"] {
    //             name,
    //         }`
    //     ).then((data) => setOwnerName(data[0]))
  }, []);

  const ownername = async (singleProject) => {
    setSingleProject(singleProject);
    await client
      .fetch(
        `*[_id == "${singleProject.owner._ref}"] {
                name,
            }`
      )
      .then((data) => setOwnerName(data[0]));
  };

  return (
    <div className="row justify-content-center">
      <div className="container-fluid overflow-hidden text-start fs-6">
        <table className="table table-hover" id="skills">
          <tbody>
            <tr>
              <th>Email:</th>
              <td>{singleProject.email}</td>
            </tr>
            <tr>
              <th>Contract:</th>
              <td>{singleProject.contract}</td>
            </tr>
            <tr>
              <th>Owner Name:</th>
              <td>{ownerName.name}</td>
            </tr>
            <tr>
              <th>Project Status:</th>
              <td>{singleProject.newlyLaunched === true ? "Recently Launched" : singleProject.devStatus} {singleProject.status}</td>
            </tr>
            <tr>
              <th>Community Strength:</th>
              <td>{singleProject.comStrength}k+</td>
            </tr>
            <tr>
              <th>KYC Link:</th>
              <td>{singleProject.kyc}</td>
            </tr>
            <tr>
              <th>Audit Link:</th>
              <td>{singleProject.audit}</td>
            </tr>
            <tr>
              <th>Trading Start Date:</th>
              <td>{singleProject.tradingStartDate}</td>
            </tr>
            <tr>
              <th>Liquidity locked till:</th>
              <td>{singleProject.lpLocked}</td>
            </tr>
            <tr>
              <th>Marketing Budget:</th>
              <td>${singleProject.budget}k</td>
            </tr>
            <tr>
              <th>Marketing Wallet:</th>
              <td>{" "}{singleProject.marketingWallet == undefined ? "" : singleProject.marketingWallet.slice(0, 6) + "..." + singleProject.marketingWallet.slice(-4)}</td>
            </tr>
            <tr>
              <th>Dev Wallet:</th>
              <td>{" "}{singleProject.devwallet == undefined ? "" : singleProject.devwallet.slice(0, 6) + "..." + singleProject.devwallet.slice(-4)}</td>
            </tr>
            <tr>
              <th>Team Wallet:</th>
              <td>{" "}{singleProject.teamwallet == undefined ? "" : singleProject.teamwallet.slice(0, 6) + "..." + singleProject.teamwallet.slice(-4)}</td>
            </tr>
            <tr>
              <th>CMC Link:</th>
              <td><a href={`${singleProject.cmc}`} target="_blank" rel="noreferrer">{singleProject.cmc}</a></td>
            </tr>
            <tr>
              <th>CG Link:</th>
              <td><a href={`${singleProject.cg}`} target="_blank" rel="noreferrer">{singleProject.cg}</a></td>
            </tr>
            <tr>
              <th>Exchange Listings:</th>
              <td>{singleProject.exchanges}</td>
            </tr>
            <tr>
              <th>Launch Price:</th>
              <td>${singleProject.launchPrice}</td>
            </tr>
            <tr>
              <th>Initial MC:</th>
              <td>${singleProject.initialMC}</td>
            </tr>
            <tr>
              <th>MC at ATH:</th>
              <td>${singleProject.athMC}</td>
            </tr>
            <tr>
              <th>Number of Holders:</th>
              <td>{singleProject.holdersCount}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: "#12141ee7", padding: "0px 5px" }}>
          <h4 className="mt-5" style={{ color: "#ffcc00" }}>
            What our experts say:
          </h4>
          <BlockContent
            blocks={singleProject.expertOpinion}
            projectId="lfyw4jna"
            dataset="production"
          />
          <h3 style={{ color: "#ffcc00" }}>BBT's Verdict:</h3>
          <BlockContent
            blocks={singleProject.verdict}
            projectId="lfyw4jna"
            dataset="production"
          />
        </div>
        <h3
          style={
            singleProject.cg === null
              ? { display: "block" }
              : { display: "none" }
          }
        >
          Chart Not Available
        </h3>
        <div
          className="row mt-5"
          style={
            singleProject.cg === null
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <h3>
            {singleProject.name} Price Chart ({singleProject.tracker})
          </h3>
          <ScriptTag src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"></ScriptTag>
          <coingecko-coin-ticker-widget
            coin-id={singleProject.cgId}
            currency="usd"
            background-color="#12141E"
            locale="en"
          ></coingecko-coin-ticker-widget>
          <ScriptTag src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></ScriptTag>
          <coingecko-coin-compare-chart-widget
            coin-ids={singleProject.cgId}
            currency="usd"
            locale="en"
          ></coingecko-coin-compare-chart-widget>
        </div>
      </div>
    </div>
  );
}

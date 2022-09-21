import React, { useState, useEffect } from "react";
import client from "../client";
import { getBBTBalance } from "../Web3_connection/ContractMethods";
import { Link } from "react-router-dom";
import SidebarSlide from "./SidebarSlide";
import PlatformHead from "./PlatformHead";

export default function InEligible() {
  // Fetch required number of Tokens for accessing Safe Haven
  const [BBTLimit, setBBTLimit] = useState(undefined);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "minHolding"]{
        minBal,
      }`
      )
      .then((data) => setBBTLimit(data[0].minBal))
      .catch(console.error);
  }, []);

  const [BBTBal, setBBTBal] = useState(0);

  useEffect(() => {
    const fetchBal = async () => {
      let currentBal = await getBBTBalance();
      setBBTBal(currentBal);
    };
    fetchBal();
  }, []);


  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            padding: "25px 50px",
          }}
        >
          <h2>
            YOU DO NOT HODL THE MINIMUM REQUIRED ({BBTLimit} $DUALIS) TOKENS TO
            ACCESS SAFE HAVEN
          </h2>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76"
            // style={
            //   BBTBal <= BBTLimit ? { display: "block" } : { display: "none" }
            // }
            target="_blank"
            className="btnYellow btn"
            rel="noreferrer"
          >GET ACCESS</a> <br /> <br />
          <Link
          className="btn btnYellow m-auto"
            to="/safehaven/"
            // style={BBTBal >= BBTLimit ? { display: "block", width:"fit-content" } : { display: "none" }}
            >
              Access Safe Haven</Link>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import client from "../client";
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getTotoalProfile } from "./../Web3_connection/ContractMethods";
import { initInstance } from "./../Web3_connection/web3_methods";
import scam from "../images/scam.png";

export default function OngoingScam() {
  return (
    <div className="row">
      <div className="table-responsive">
        <table className="table table-dark rounded px-3">
          <tr className="table-dark">
            <td className="ps-2">Token</td>
            <td>Type</td>
            <td>Days</td>
            <td>APR</td>
            <td>Status</td>
            <td>Total Balance</td>
            <td>Reward</td>
            <td>Status</td>
          </tr>
        <br />
          <tr className="bg-dark">
            <td className="ps-2" style={{borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>$DUALIS</td>
            <td>Soft</td>
            <td>30</td>
            <td>30%</td>
            <td>Inactive</td>
            <td>0</td>
            <td>0</td>
            <td style={{borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>
              <button className="btn btn-warning my-2">Approve</button>
            </td>
          </tr>
          <br />
          <tr className="bg-dark text-secondary">
            <td className="ps-2" style={{borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>$DUALIS/BNB</td>
            <td>Smart Staking</td>
            <td>30</td>
            <td>Mixed</td>
            <td>Inactive</td>
            <td>0</td>
            <td>0</td>
            <td style={{borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>
              <button className="btn btn-warning my-2">Deposit</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

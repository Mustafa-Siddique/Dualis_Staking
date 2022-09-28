import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ABI } from "../ABI/Rating";
import {AiOutlineLogout} from "react-icons/ai"
import {
  loginProcess,
  getAccount,
} from "../Web3_connection/web3_methods";
import "./style.css";
import {
  getBBTBalance,
  getTokenBalance,
} from "../Web3_connection/ContractMethods";
import Logo from "./../images/logo-circle.png";
import axios from "axios";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Metamask from "./../images/metamask.png";
import WalletConnect from "./../images/walletconnect.png";
import {SelectWallet,DisconnectWallet} from './../Web3_connection/web3'
import video from '../videos/video-background.m4v'

const Moralis = require("moralis");
Moralis.initialize("3Amct4xq6AlkAngmYLPFJSJeFRe4nxbbyvzlIcOC");
Moralis.serverURL = "https://4bffcvuqchek.usemoralis.com:2053/server";


export default function PlatformHead() {
  const [userAddress, setUserAddress] = useState(window.User);
  const [BBTBal, setBBTBal] = useState(0);
  const [price, setPrice] = useState(0);
  const [bbtian, setBBTian] = useState(0);
  const [WalletProvider, setWalletProvider] = useState();
  const [modal, setModal] = useState(false);
  const [showDis, setShowDis] = useState(false);
  const [preventDuble, setPreventDuble] = useState(true)
  
  useEffect(async()=>{
    try{
      if(window.provide){
       await TokenDetails();
       await fetchBal();
      }
    }
    catch(e){
      //
    }
  },[window.provide])

  const ConnectWalletMetaMask = async () => {
    window.MM = true
    window.WC = false
    await loginProcess();
    await SelectWallet();
    if (true) {
      const address = await getAccount();
      window.User = address
      setUserAddress(address);
    }
    toggleModal();
  };


  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const authButton = document.getElementById("btn-auth");
  const resultBox = document.getElementById("result");


  const ConnectWallet = async () => {
    window.WC = true
    window.MM = false
      try {
        await SelectWallet();
        const address = await getAccount();
        console.log("address",address)
        window.User = address
        setUserAddress(address);
        toggleModal();
      } catch (error) {
        console.log("authenticate failed", error);
      }
      
  };


  const TokenDetails = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=booby-trap&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(function (response) {
        setPrice(response.data[0].current_price);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  async function logout() {
    try {
      setUserAddress(undefined);
      window.User = undefined
      await DisconnectWallet();
      showDisconnect();
      window.location.reload();
    } catch (error) {
      console.log("logOut failed", error);
    }
  }

  const fetchBal = async () => {
    let currentBal = await getBBTBalance();
    let titan = await getTokenBalance();
    console.log("balance is ",currentBal)
    console.log(currentBal)
    setBBTian(titan);
    setBBTBal(currentBal);
  };

  const Slicing = (add) => {
    const first = add.slice(0, 5);
    const second = add.slice(35);
    return first + "..." + second;
  };
  


  const showDisconnect =()=>{
    if(!showDis){
      setShowDis(true)
    }
    else{
      setShowDis(false)
    }
  }

  return (
    <div>
      <div className="position-relative">
        <div className="container-fluid">
          <div className="topBar d-flex flex-row-reverse pt-3">
            
            {showDis ? <button className="Connect-drop btn btnOutline" onClick={()=> logout()}>Disconnect</button>:''}
            {!userAddress ? (
              <button className="btn btnOutline ms-2" onClick={() => toggleModal()}>
                Connect Wallet
              </button>
            ) : (
              <div className="">
                <button className="btn btnOutline ms-2" onClick={() => showDisconnect()}>
                  {Slicing(userAddress)}{" "}
                  <img className="mr-1" src={Logo} alt="" width={25} height={25} /> {" "}&nbsp;&nbsp;<AiOutlineLogout fill='#ffffff' size={20}/>
                </button><br/>
              </div>
            )}
            <br />
            {modal && (
              <div style={{ zIndex: "5" }}>
                <div
                  onClick={() => toggleModal()}
                  className="overlay-popup"
                ></div>
                <div className="modal-content wallet-select">
                  <label
                    for="category"
                    style={{backgroundColor:"#161C24"}}
                    className="form-label fw-bold py-3 text-center position-relative"
                  >
                    Select Wallet
                  </label>
                  <div className="wallte-menu">
                    <button
                      className="metamask-btn btn text-light"
                      onClick={() => ConnectWalletMetaMask()}
                    >
                      <img src={Metamask} width={32} alt="" /> MetaMask
                    </button>
                    <button
                      className="metamask-btn btn text-light"
                      onClick={() => ConnectWallet()}
                    >
                      <img src={WalletConnect} alt="" width={32} /> WalletConnect
                    </button>
                  </div>
                </div>
              </div>
            )}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pancakeswap.finance/swap?outputCurrency=0xB3eF4bc63a0Ec7889737d9653A12C7F42EdaE09E"
              className="btn btnOutline"
            >
              BUY $DUALIS
            </a>

          </div>
          <div className="container" style={{maxWidth:"1150px"}}>
            <div className="row  my-5 justify-content-around">
              <div className="col-md-3 currentStat">
                <h3>{!isNaN(BBTBal) ? Number(BBTBal).toFixed(2): 0} </h3>
                <span>Your $DUALIS Balance</span>
              </div>
              <div className="col-md-3 currentStat">
                <h3>${Number(price * 881909880.6534261).toFixed(2)}</h3>
                <span>Market Cap</span>
              </div>
              <div className="col-md-3 currentStat">
                <h3>${price}</h3>
                <span>Token Price</span>
              </div>
              <div className="col-md-3 currentStat">
                <h3>{bbtian ? bbtian : 0} </h3>
                <span>$DUALIS Staked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

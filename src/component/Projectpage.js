import React, { useState, useEffect } from "react";
import client from "../client";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiFillLeftCircle } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Projectdetails from "./Projectdetails";
import { ToastContainer, toast } from "react-toastify";
import {
  addReview,
  BNBBalance,
  getProfile,
} from "./../Web3_connection/ContractMethods";
import { getAccount, initInstance } from "./../Web3_connection/web3_methods";
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Projectpage() {
  const [lg, setlg] = useState(false)
  const [singleProject, setSingleProject] = useState([]);
  const [rating, setRating] = useState("SAFU (5 Start)");
  const [bnbBal, setBNBBal] = useState(0);
  const [tokenBal, setTokenBal] = useState(0);
  const { slug, id } = useParams();
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
                website,
                facebook,
                discord,
                instagram,
                reditt,
                youtube,
                other,
                tgOwner,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                devwallet,
                devStatus,
                description,
            }`
      )
      .then((data) => setSingleProject(data[0]));
    const init = async () => {
      await initInstance();
      await getprofile(id);

    };
    setInterval(() => {
      init();
    }, 4000);

    const getBNB = async () => {
      const bnbbal = await BNBBalance();
      setBNBBal(bnbbal);
    };
    getBNB();
  }, [slug]);

  const [avgRating, setavgRating] = useState();
  const [modal, setModal] = useState(false);
  const [countreview, setCountReview] = useState(0);
  const [name, setName] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const giveRating = async (rate) => {
    toggleModal();
    try {
      if (rate.includes("Safu")) {
        const got = await addReview(id, 5);
        if (got.status === true) {
          notify();
          await getprofile()
        }
      } else if (rate.includes("Excellent")) {
        const got = await addReview(id, 4);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      } else if (rate.includes("DYOR")) {
        const got = await addReview(id, 3);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      } else if (rate.includes("Avoidable")) {
        const got = await addReview(id, 2);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      } else if (rate.includes("Scammer")) {
        const got = await addReview(id, 1);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getprofile = async (id) => {
    const data = await getProfile(id);
    // console.log("getprofile",data)
    setName(data.name);
    setCountReview(data.reviewsCount);
    setavgRating(data.avgRating / 10);
  };

  const start = (avgRating) => {
    // console.log("Rating",Number(avgRating).toFixed(0))
    if (Number(avgRating).toFixed(0) === "5") {
      return [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ];
    } else if (Number(avgRating).toFixed(0) === "4") {
      return [<BsStarFill />, <BsStarFill />, <BsStarFill />, <BsStarFill />];
    } else if (Number(avgRating).toFixed(0) === "3") {
      return [<BsStarFill />, <BsStarFill />, <BsStarFill />];
    } else if (Number(avgRating).toFixed(0) === "2") {
      return [<BsStarFill />, <BsStarFill />];
    } else if (Number(avgRating).toFixed(0) === "1") {
      return [<BsStarFill />];
    } else {
    }
  };

  return (
    <div style={{display:"flex",}}>
      <SidebarSlide lg={lg}/>
      <div className="globalCont">
      <PlatformHead />
      <button id="pro-sidebar-burger" onClick={() => {setlg(!lg)}}><GiHamburgerMenu/></button>
      <div id="pagesafe-cont" className="owner-prof-cont position-relative projectpage-cont" style={{ borderTop: "1px solid #474747", margin:"auto", maxWidth:"1150px" }}>
        <div className="safe-head py-3 container-fluid">
          <div className="head-content">
            <Breadcrumb>
              <AiFillLeftCircle size={25} color="#fff" />
              <Breadcrumb.Item href="/">&nbsp; Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/platform/safehaven/safuprojects">
                Safe Haven
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{singleProject.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="col-lg-8">
              <div className="project-main">
                <div className="d-flex">
                  {singleProject.image && singleProject.image.asset && (
                    <img
                      className="projectImg me-3"
                      src={singleProject.image.asset.url}
                      alt={singleProject.name}
                    />
                  )}
                  <h1 className="fs-4 my-auto text-light">{singleProject.name}</h1>
                </div>
                <h3 className="text-light mt-2">{singleProject.trappoints} Trap Points</h3>
                <div className="fs-6 fw-normal text-light">
                  <span className="review-star fs-5"> {start(avgRating)} </span> (
                  {countreview} Reviews)
                </div>
                <p className="fs-6 text-light fw-normal">
                  0 Trap Points means the safest! lower trap points means safer!
                  Read more about{" "}
                  <Link
                    to="/"
                    style={{ color: "#fff",}}
                  >
                    trap points
                  </Link>
                </p>
                <button
                  className={`btn btnYellow ${!bnbBal ? "disabled" : ""} `}
                  onClick={() => toggleModal()}
                >
                  {!bnbBal ? "Insufficient BNB Balance" : "Give Rating"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {modal && (
          <div style={{ zIndex: "5", position: "relative" }}>
            <div onClick={() => toggleModal()} className="overlay-popup"></div>
            <div className="modal-content py-3" style={{ backgroundColor: "#283046", top:"-50px" }}>
              <label for="category" className="form-label fw-bold mb-3 text-center  ">
                Give Rating
              </label>
              <span
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  marginTop: "-20px",
                  marginBottom: "20px",
                }}
              >
                (A fee of 0.001 BNBs is applicable to keep this utility spam
                free!)
              </span>
              <div className="px-4 mb-2">
                <select
                  className="form-select text-center"
                  id="sel1"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  aria-label="Default select example"
                >
                  <option selected>Select Star Rating</option>
                  <option>
                    Safu &nbsp; &#9733; &#9733; &#9733; &#9733; &#9733;
                  </option>
                  <option>
                    Excellent &nbsp; &#9733; &#9733; &#9733; &#9733;
                  </option>
                  <option>DYOR &nbsp; &#9733; &#9733; &#9733;</option>
                  <option>Avoidable &nbsp; &#9733; &#9733;</option>
                  <option>Scammer &nbsp; &#9733;</option>
                </select>
              </div>
              <button
                className="btn w-50 mx-auto fw-bold my-2 btnOutline-sm"
                onClick={() => giveRating(rating)}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="safe-content row w-100 mt-3">
          <div className="content col">
            <Projectdetails />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

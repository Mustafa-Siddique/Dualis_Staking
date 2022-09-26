import "./App.css";
import Bottomnav from "./component/Bottomnav";
import Faqs from "./component/Faqs";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import Ownerprofile from "./component/Ownerprofile";
import Page404 from "./component/Page404";
import ComingSoon from "./component/ComingSoon";
import Projectpage from "./component/Projectpage";
import PageBoobyTrap from "./component/PageBoobyTrap";
import { getBBTBalance } from "./Web3_connection/ContractMethods";
import { loginProcess } from "./Web3_connection/web3_methods";
import client from "./client";
import InEligible from "./component/InEligible";
import SafeHaven from "./component/SafeHaven";
import DYORcards from "./component/DYORcards";
import UpcomingCards from "./component/upcomingCards";
import Devcards from "./component/Devcards";
import Influencers from "./component/Influencers";
import Promoters from "./component/Promoters";
import Devprofile from "./component/Devprofile";
import InfluencerProfile from "./component/InfluencerProfile";
import PromoterProfile from "./component/PromoterProfile";
import Loading from "./component/Loading";

function App() {
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
      await loginProcess();
      let currentBal = await getBBTBalance();
      setBBTBal(currentBal);
    };
    // fetchBal()
  }, []);

  if (BBTLimit) {
    console.log(BBTBal, BBTLimit);
  }
  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      // window.location.reload();
    });
  } catch (e) {
    //
  }

  /* LOADER TIMEOUT */
  const [loaderTimeout, setLoaderTimeout] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setLoaderTimeout(false)
    }, 5000);
  })
  
  return (
    <div className="App" id="App">
      {loaderTimeout && <Loading/>}
      <Router>
        <Bottomnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="faqs" element={<Faqs />} />

            {/* SAFE HAVEN */}
            <Route path="safehaven" element={<SafeHaven />}/>
            <Route
              path="safehaven/safuprojects/:slug/:id"
              element={<Projectpage />}
            />
            <Route
              path="safehaven/safeowners/:slug/:id"
              element={<Ownerprofile />}
            />

            {/* Routes for Dualis Finance */}
            <Route path="staking" element={<PageBoobyTrap />}/>
            <Route
              path="boobytrap/scamprojects/:slug/:id"
              element={<Projectpage />}
            />
            <Route
              path="boobytrap/scamowners/:slug/:id"
              element={<Ownerprofile />}
            />

            {/* Routes for DYOR CARDs */}
            <Route path="ongoing" element={<DYORcards />} />
            <Route
              path="ongoing/projects/:slug/:id"
              element={<Projectpage />}
            />
            <Route path="upcoming" element={<UpcomingCards />} />
            <Route
              path="upcoming/projects/:slug/:id"
              element={<Projectpage />}
            />
            {/* Routes for Devs */}
            <Route path="developers" element={<Devcards />} />
            <Route path="developers/:slug/:id" element={<Devprofile />} />
            {/* Routes for Influencers */}
            <Route path="influencers" element={<Influencers />} />
            <Route
              path="influencers/:slug/:id"
              element={<InfluencerProfile />}
            />
            {/* Routes for Promoters */}
            <Route path="promoters" element={<Promoters />} />
            <Route path="promoters/:slug/:id" element={<PromoterProfile />} />
            <Route path="docs" element={<Faqs />} />

          {/* Miscelleneous Routes */}
          <Route path="ineligible" element={<InEligible />} />
          <Route path="comingsoon" element={<ComingSoon />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

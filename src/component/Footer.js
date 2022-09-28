import React from "react";
import { FaTelegramPlane, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="footer-container" className='position-relative'>
      <div className="row">
        <div className="col-md-6 ps-2">
          <p>Email: <a className="text-decoration-none" style={{ color: "#fff", fontWeight: "500" }} href="mailto:contact@dualis.finance">contact@dualis.finance</a></p>
        </div>
        <div className="col-md-6 f-socials">
          <a href="https://t.me/DUALISFINANCE" target = "_blank" rel="noreferrer">
            <FaTelegramPlane size={25} className="text-light ms-3" />
          </a>
          {/* <a href="http://tiktok.com/@boobytrapbsc" target = "_blank" rel="noreferrer">
            <FaTiktok size={25} className="text-light ms-3" />
          </a>
          <a href="https://instagram.com/boobytrap_bsc" target = "_blank" rel="noreferrer">
            <FaInstagram size={25} className="text-light ms-3" />
          </a> */}
          <a href="https://twitter.com/DUALISFINANCE" target = "_blank" rel="noreferrer">
            <FaTwitter size={25} className="text-light ms-3" />
          </a>
        </div>
      </div>
      <div className="copyright pt-5 pb-2 ps-2">
        <p>© 2022 Dualis Finance. All rights reserved.</p>
      </div>
    </div>
  );
}
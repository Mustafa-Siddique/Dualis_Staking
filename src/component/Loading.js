import React from "react";

export default function Loading() {
  return (
    <div id="loadingCont">
      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core" style={{boxShadow: "0px 0px 15px rgb(63,249,220) inset"}}>  
          </div>
        </div>
      </div>
    </div>
  );
}

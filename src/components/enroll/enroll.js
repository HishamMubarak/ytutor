import React from "react";
import "./enroll.css";
import { Link } from "react-router";
import wi from "./whatsapp.svg";
function Enroll() {
  return (
    <div className="container-fluid enroll-global row">
      <div className="col-lg-5 col-md-5 col-sm-12 enrol-sections offset-lg-1 offset-md-1">
        <h3>Addmission are now open</h3>
        <p>
          Writers and stars of Veep have responded incredulously to the news an
          Australian politician required stitches after knocking himself
          unconscious .
        </p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 offset-lg-2 offset-md-2 enrol-sections enroll-button">
        <button>Enroll Now</button>
        {/* <Link to="https://api.whatsapp.com/send?phone=1111111111">
          {" "}
          <span className="whatsapp-icon">
            <img src={wi}></img>
          </span>
        </Link> */}
      </div>
    </div>
  );
}

export default Enroll;

import React from "react";
import Nav from "./nav";
import logo from "../assets/images/Logo.svg";
import "../assets/css/header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          {/* <div className="nav-header">
            <div className="nav-title"> */}
              <img src={logo} alt="Logo" />
            {/* </div>
          </div> */}
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <Nav></Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

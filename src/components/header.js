import React from "react";
import Nav from "./nav";
import logo from "../assets/images/Logo.svg";
import '../assets/css/header.css'

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <img src={logo} alt="Logo" />
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;

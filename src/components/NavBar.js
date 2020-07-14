import React from "react";
import Logo from "../images/logo.svg";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-lofo" src={Logo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-dark">Conf</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

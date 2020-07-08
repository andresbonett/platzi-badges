import React from "react";
import Logo from "../images/logo.svg";
import "./styles/Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-lofo" src={Logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-dark">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;

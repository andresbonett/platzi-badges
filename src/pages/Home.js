import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import logoHome from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

// function Home() {
function Home() {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-md-6 col-sm-12">
              <img className="img-fluid" src={astronauts} alt="" />
            </div>
            <div className="Home__col col-md-6 col-sm-12">
              <br />
              <img className="img-fluid" src={logoHome} alt="Logo" />
              <br />
              <h1>PRINT YOUR BADGES</h1>
              <p>The easiest way to manage your conference</p>
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

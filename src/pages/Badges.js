import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList";

function Badges() {
  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges__conf-logo" src={confLogo} alt="ConfLogo" />
          </div>
        </div>
      </div>

      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Badges;

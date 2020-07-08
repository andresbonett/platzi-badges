import React from "react";
import NavBar from "../components/NavBar.js";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Andrew"
                lastName="BM"
                jobTitle="Frontend Developer"
                twitter="andresbonettm"
                avatarUrl="https://s.gravatar.com/avatar/c9b4b6387c83c86c4f4191bc19f7ac7d?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

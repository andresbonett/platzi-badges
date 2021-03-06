import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";

function Badge(props) {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Avatar" />
      </div>
      <div className="Badge__section-name">
        <Gravatar email={props.email} className="BadgesListItem__avatar" />
        <h1>
          {props.firstName} <br />
          {props.lastName}
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <div>@{props.twitter}</div>
      </div>
      <div className="Badge__footer">#PlatziConf </div>
    </div>
  );
}
export default Badge;

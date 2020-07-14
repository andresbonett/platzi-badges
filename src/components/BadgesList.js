import React from "react";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

function BadgesList(props) {
  return (
    <li className="BadgesList">
      <div className="BadgesListItem ">
        <Gravatar className="BadgesListItem__avatar" email={props.email} />
        <div>
          <h4>
            <span>{props.firstName} </span>
            <span>{props.lastName}</span>
          </h4>

          <div>{props.jobTitle}</div>
          <div>@{props.twitter}</div>
        </div>
      </div>
    </li>
  );
}

export default BadgesList;

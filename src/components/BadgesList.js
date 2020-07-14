import React from "react";

import "./styles/BadgesList.css";

function BadgesList(props) {
  return (
    <li className="BadgesList">
      <div className="BadgesListItem ">
        <img
          className="BadgesListItem__avatar"
          src={props.avatarUrl}
          alt="avatar"
        />
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

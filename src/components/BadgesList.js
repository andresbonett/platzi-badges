import React from "react";

import "./styles/BadgesList.css";

import { Link } from "react-router-dom";

import BadgesListItems from "./BadgesListItems";

function BadgesList(props) {
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value=""
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {props.data.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItems badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;

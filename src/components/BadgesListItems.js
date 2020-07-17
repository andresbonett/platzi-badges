import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function BadgesListItems(props) {
  const badge = props.badge;
  return (
    <li className="BadgesList">
      <Link
        className="text-reset text-decoration-none"
        to={`/badges/${badge.id}`}
      >
        <div className="BadgesListItem ">
          <Gravatar className="BadgesListItem__avatar" email={badge.email} />
          <div>
            <h4>
              <span>{badge.firstName} </span>
              <span>{badge.lastName}</span>
            </h4>

            <div>{badge.jobTitle}</div>
            <div>@{badge.twitter}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BadgesListItems;

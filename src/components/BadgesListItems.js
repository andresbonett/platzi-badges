import React from "react";
import Gravatar from "./Gravatar";

function BadgesListItems(props) {
  const badge = props.badge;
  return (
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
  );
}

export default BadgesListItems;

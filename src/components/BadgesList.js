import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <li className="BadgesList">
        <div className="BadgesListItem ">
          <img
            className="BadgesListItem__avatar"
            src={this.props.avatarUrl}
            alt="avatar"
          />
          <div>
            <h4>
              <span>{this.props.firstName} </span>
              <span>{this.props.lastName}</span>
            </h4>

            <div>{this.props.jobTitle}</div>
            <div>@{this.props.twitter}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default BadgesList;

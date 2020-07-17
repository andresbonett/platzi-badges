import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import BadgesListItems from "./BadgesListItems";

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return [query, setQuery, filteredBadges];
}

function BadgesList(props) {
  const badges = props.data;

  const [query, setQuery, filteredBadges] = useSearchBadges(badges);

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
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

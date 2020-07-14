import React, { useState, useEffect } from "react";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import API from "../api";

function Badges() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  const fetchData = async () => {
    setState({ loading: true, error: null });
    try {
      const data = await API.badges.list();
      setState({ loading: false, data: data, error: null });
    } catch (error) {
      console.log("error: " + error);
      setState({ loading: false, error: error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (state.loading)
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  if (state.error !== null)
    return (
      <div className="loader">
        <h3>Ups! No connection established</h3>
      </div>
    );

  if (state.data.length === 0) {
    return (
      <React.Fragment>
        <div className="Badges__container loader">
          <h3>No badges were found</h3>
          <div className="Badges__buttons">
            <Link to="/badge/new" className="btn btn-primary">
              Create New Badge
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

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
          <Link to="/badge/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <ul className="list-unstyled">
              {state.data.map((badge) => {
                return (
                  <BadgesList
                    key={badge.id}
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    jobTitle={badge.jobTitle}
                    twitter={badge.twitter}
                    email={badge.email}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Badges;

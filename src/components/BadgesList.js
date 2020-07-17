import React, { useState, useEffect } from "react";

import "./styles/BadgesList.css";

import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import MiniLoader from "../components/MiniLoader";
import API from "../api";
import BadgesListItems from "./BadgesListItems";

function BadgesList(props) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  const fetchData = async () => {
    setState((prev) => {
      return { ...prev, loading: true, error: null };
    });
    try {
      const data = await API.badges.list();
      setState((prev) => {
        return { ...prev, loading: false, data: data, error: null };
      });
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => fetchData(), 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (state.loading && state.data.length === 0) {
    return <Loader />;
  }

  if (state.error !== null) {
    return (
      <div className="loader">
        <h3>Ups! No connection established</h3>
      </div>
    );
  }

  if (state.data.length === 0) {
    return (
      <React.Fragment>
        <div className="Badges__container loader">
          <h3>No badges were found</h3>
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Create New Badge
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ul className="list-unstyled">
        {state.data.map((badge) => {
          return <BadgesListItems badge={badge} />;
        })}
      </ul>
      <div>{state.loading && <MiniLoader />}</div>
    </React.Fragment>
  );
}

export default BadgesList;

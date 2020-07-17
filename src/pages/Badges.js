import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList";
import Loader from "../components/Loader";
import MiniLoader from "../components/MiniLoader";
import API from "../api";

function Badges() {
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
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges__conf-logo" src={confLogo} alt="ConfLogo" />
          </div>
        </div>
      </div>

      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList data={state.data} />
            <div>{state.loading && <MiniLoader />}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Badges;

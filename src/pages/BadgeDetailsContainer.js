import React, { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Error404 from "./Error404";
import API from "../api";
import BadgeDetails from "./BadgeDetails";

function BadgeDetailsContainer(props) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true, error: null, data: undefined });
      try {
        const data = await API.badges.read(props.match.params.badgeId);
        setState({ loading: false, error: null, data: data });
      } catch (err) {
        setState({ loading: false, error: err.message, data: undefined });
      }
    };
    fetchData();
  }, [props.match.params.badgeId]);

  if (state.loading) return <Loader />;
  if (state.error) return <Error404 />;

  return <BadgeDetails badge={state.data} />;
}

export default BadgeDetailsContainer;

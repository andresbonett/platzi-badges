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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = (e) => {
    setModalIsOpen(true);
  };
  const handleCloseModal = (e) => {
    setModalIsOpen(false);
  };

  const handleDeleteBadge = async () => {
    setState({ loading: true, error: null });
    try {
      await API.badges.remove(props.match.params.badgeId);
      props.history.push("/badges");
    } catch (err) {
      setState({ loading: false, error: err.message });
    }
  };

  if (state.loading) return <Loader />;
  if (state.error) return <Error404 />;

  return (
    <BadgeDetails
      badge={state.data}
      modalIsOpen={modalIsOpen}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
      onDeleteBadge={handleDeleteBadge}
    />
  );
}

export default BadgeDetailsContainer;

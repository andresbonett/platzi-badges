import React, { useState } from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import API from "../api";
import md5 from "md5";
import Loader from "../components/Loader";

function BadgeNew() {
  const [state, setState] = useState({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const badgeId = md5(state.form.email);
    try {
      setState((prev) => {
        return { ...prev, loading: true };
      });
      await API.badges.create({ id: badgeId, ...state.form });
      setState((prev) => {
        return { ...prev, loading: false };
      });
    } catch (error) {
      setState((prev) => {
        return { ...prev, loading: false, error: error };
      });
    }
  };

  return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName || "First Name"}
              lastName={state.form.lastName || "Last Name"}
              jobTitle={state.form.jobTitle || "JobTitle"}
              twitter={state.form.twitter || "userTwitter"}
              email={state.form.email}
            />
            {state.loading && <Loader />}
          </div>
          <div className="col-6">
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={state.form}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeNew;

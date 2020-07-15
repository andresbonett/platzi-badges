import React, { useState, useEffect } from "react";
import "./styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import API from "../api";
import Loader from "../components/Loader";
import Error404 from "./Error404";

function BadgeEdit(props) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true, error: null });
      try {
        const data = await API.badges.read(props.match.params.badgeId);
        setState((prev) => {
          return { ...prev, loading: false, form: data };
        });
      } catch (error) {
        setState((prev) => {
          return { loading: false, error: `${error.message}`, ...prev };
        });
      }
    };
    fetchData();
  }, [props.match.params.badgeId]);

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
    try {
      setState((prev) => {
        return { ...prev, loading: true };
      });
      await API.badges.update(props.match.params.badgeId, state.form);
      setState((prev) => {
        return { ...prev, loading: false };
      });
      props.history.push("/badges");
    } catch (err) {
      setState((prev) => {
        return { ...prev, loading: false, error: `${err}` };
      });
    }
  };

  if (state.loading) return <Loader />;
  if (Object.keys(state.form).length === 0) return <Error404 />;

  return (
    <React.Fragment>
      <div className="BadgeEdit__hero">
        <img className="BadgeEdit__hero-image" src={header} alt="" />
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
            <h1>Edit Attendant</h1>
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={state.form}
              error={state.error}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeEdit;

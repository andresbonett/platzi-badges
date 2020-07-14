import React, { useState } from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

function BadgeNew() {
  const [state, setState] = useState({
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
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
              avatarUrl="https://s.gravatar.com/avatar/c9b4b6387c83c86c4f4191bc19f7ac7d?s=80"
            />
          </div>
          <div className="col-6">
            <BadgeForm onChange={handleChange} formValues={state.form} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeNew;

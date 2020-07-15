import React from "react";

function BadgeForm(props) {
  const handleClick = (e) => {
    console.log("clicked");
  };

  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={props.formValues.firstName}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={props.formValues.lastName}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="email"
            name="email"
            value={props.formValues.email}
            required
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={props.formValues.jobTitle}
            required
          />
        </div>

        <div className="form-group">
          <label>twitter</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={props.formValues.twitter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
        {props.error && <div className="text-danger">{props.error}</div>}
      </form>
    </React.Fragment>
  );
}

export default BadgeForm;

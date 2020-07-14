import React from "react";

function BadgeForm(props) {
  const handleClick = (e) => {
    console.log("clicked");
  };

  return (
    <React.Fragment>
      <h1>New Attendant</h1>

      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={props.formValues.firstName}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={props.lastname}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="email"
            name="email"
            value={props.email}
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={props.jobTitle}
          />
        </div>

        <div className="form-group">
          <label>twitter</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={props.twitter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
      </form>
    </React.Fragment>
  );
}

export default BadgeForm;

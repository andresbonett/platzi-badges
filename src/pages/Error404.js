import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

// function Home() {
function Error404() {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="Home__col">
          <h1>Error: 404</h1>
          <span>Click </span>
          <Link className="Home__link" to="/">
            Here
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error404;

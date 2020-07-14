import React from "react";
import NavBar from "./NavBar";
import "./styles/Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      <div className="Layout">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;

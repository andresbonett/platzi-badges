import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Home from "../pages/Home";
import Layout from "./Layout";
import Error404 from "../pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badge" component={Badges} />
          <Route exact path="/badge/new" component={BadgeNew} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

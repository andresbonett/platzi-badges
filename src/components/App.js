import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badge" component={Badges} />
        <Route exact path="/badge/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

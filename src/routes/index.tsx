import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Admin } from "../pages/Admin";

const Landing = () => (
  <div>
    <h1>Landing</h1>
    <Link to="/admin">Go to Admin</Link>
  </div>
);

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

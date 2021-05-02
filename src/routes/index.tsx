import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

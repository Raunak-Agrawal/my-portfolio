import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import ProfilePage from "views/examples/ProfilePage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <ProfilePage {...props} />} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

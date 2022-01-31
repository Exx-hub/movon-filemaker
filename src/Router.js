import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import { UserProfile } from "./utility";

function AppNavigator() {
  const ProtectedRoute = (params) => {
    return UserProfile.getCredential() ? (
      <Route {...params} component={params.component} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppNavigator;

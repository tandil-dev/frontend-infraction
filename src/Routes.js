import React from "react";
import { Switch } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { Route } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const Routes = () => {
  return(
    <MainTemplate>
      <Switch>
        <AuthenticatedRoute path={`/`} exact component={Home} />
        <AuthenticatedRoute path={`/profile`} exact component={Profile} />
        <UnauthenticatedRoute path={`/login`} exact component={Login} />
        <UnauthenticatedRoute path={`/register`} exact component={Register} />
        <Route component={NotFound} />
      </Switch>
    </MainTemplate>
  );
}

export default Routes;
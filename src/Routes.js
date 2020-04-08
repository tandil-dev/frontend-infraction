import React from "react";
import { Switch } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import editProfile from './pages/editProfile';
import Profile from './pages/Profile';
import { Route } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const Routes = () => {
  return(
    <MainTemplate>
      <Switch>
        <UnauthenticatedRoute path={`/`} exact component={Home} />
        <UnauthenticatedRoute path={`/login`} exact component={Login} />
        <AuthenticatedRoute path={`/profile`} exact component={Profile} />
        <AuthenticatedRoute path={`/editProfile`} exact component={editProfile} />
        <Route component={NotFound} />
      </Switch>
    </MainTemplate>
  );
}

export default Routes;
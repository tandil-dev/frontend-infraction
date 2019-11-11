import React, { useState } from "react";
import { Switch } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const Routes = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return(
  <MainTemplate appProps={{isAuthenticated, userHasAuthenticated}}>
    <Switch>
      <AuthenticatedRoute path={`/`} exact component={Home} appProps={{ isAuthenticated, userHasAuthenticated }} />
      <AuthenticatedRoute path={`/profile`} exact component={Profile} appProps={{ isAuthenticated, userHasAuthenticated }} />
      <UnauthenticatedRoute path={`/login`} exact component={Login}  appProps={{ isAuthenticated, userHasAuthenticated }} />
      <UnauthenticatedRoute path={`/register`} exact component={Register}  appProps={{ isAuthenticated, userHasAuthenticated }} />
      <AppliedRoute component={NotFound} />
    </Switch>
  </MainTemplate>
);
  }

export default Routes;
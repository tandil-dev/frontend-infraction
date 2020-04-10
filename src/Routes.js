import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

const Routes = () => (
  <MainTemplate>
    <Switch>
      <UnauthenticatedRoute path="/" exact component={Home} />
      <UnauthenticatedRoute path="/login" exact component={Login} />
      <AuthenticatedRoute path="/profile" exact component={Profile} />
      <AuthenticatedRoute path="/editProfile" exact component={EditProfile} />
      <Route component={NotFound} />
    </Switch>
  </MainTemplate>
);

export default Routes;

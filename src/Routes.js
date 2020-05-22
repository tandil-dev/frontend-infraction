import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Report from './pages/Report';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import AdminRoute from './components/AdminRoute';

const Routes = () => (
  <MainTemplate>
    <Switch>
      <UnauthenticatedRoute path="/" exact component={Home} />
      <UnauthenticatedRoute path="/login" exact component={Login} />
      <AuthenticatedRoute path="/profile" exact component={Profile} />
      <AuthenticatedRoute path="/editProfile" exact component={EditProfile} />
      <AuthenticatedRoute path="/report" exact component={Report} />
      <AdminRoute path="/admin" exact component={Admin} />
      <Route component={NotFound} />
    </Switch>
  </MainTemplate>
);

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import EditProfile from './pages/EditProfile';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Report from './pages/Report';
import ReportedInfractions from './pages/ReportedInfractions';
import Infractions from './pages/Infractions';
import VoteInfractions from './pages/VoteInfractions';
import VoteNext from './pages/VoteNext';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import AdminRoute from './components/AdminRoute';

const Routes = () => (
  <MainTemplate>
    <Switch>
      <UnauthenticatedRoute path="/" exact component={Home} />
      <UnauthenticatedRoute path="/login" exact component={Login} />
      <AuthenticatedRoute path="/dashboard" exact component={Dashboard} />
      <AuthenticatedRoute path="/editProfile" exact component={EditProfile} />
      <AuthenticatedRoute path="/reportedInfractions" exact component={ReportedInfractions} />
      <AuthenticatedRoute path="/report" exact component={Report} />
      <AdminRoute path="/admin" exact component={Admin} />
      <AuthenticatedRoute path="/infractions/:id" exact component={Infractions} />
      <AuthenticatedRoute path="/vote/:id" exact component={VoteInfractions} />
      <AuthenticatedRoute path="/vote" exact component={VoteNext} />
      <Route component={NotFound} />
    </Switch>
  </MainTemplate>
);

export default Routes;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


function AdminRoute({ component: C, currentUser, ...rest }) {
  const isAdmin = currentUser.jwt || currentUser.djwt;
  return (
    <Route
      {...rest}
      render={(props) => (isAdmin
        ? <C {...props} />
        : (
          <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location.search}`}
          />
        ))}
    />
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(AdminRoute);

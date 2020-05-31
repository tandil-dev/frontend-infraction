import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


function AuthenticatedRoute({ component: C, currentUser, ...rest }) {
  const isLogedIn = currentUser.jwt || currentUser.djwt;
  return (
    <Route
      {...rest}
      render={(props) => (isLogedIn
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

export default connect(mapStateToProps)(AuthenticatedRoute);

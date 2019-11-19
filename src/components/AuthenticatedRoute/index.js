import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function AuthenticatedRoute({ component: C, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        currentUser.jwt
          ? <C {...props} />
          : <Redirect
              to={`/login?redirect=${props.location.pathname}${props.location.search}`}
            />}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(AuthenticatedRoute);
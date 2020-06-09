import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function querystring(name, url = window.location.href) {
  const replacedName = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp(`[?&]${replacedName}(=([^&#]*)|&|#|$)`, 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function UnauthenticatedRoute({ component: C, currentUser, ...rest }) {
  const redirect = querystring('redirect');
  const isLogedIn = currentUser.jwt || currentUser.djwt;
  return (
    <Route
      {...rest}
      render={(props) => (!isLogedIn
        ? <C {...props} />
        : (
          <Redirect
            to={redirect === '' || redirect === null ? '/dashboard' : redirect}
          />
        ))}
    />
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(UnauthenticatedRoute);

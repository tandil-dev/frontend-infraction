import React, { useState } from "react";
import { connect } from 'react-redux';

import Page from './Page';

import login from '../../redux/actions/login';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.userHasAuthenticated(true);
    props.login({
      email,
      password,
    });
  }

  return (
    <Page 
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      validateForm={validateForm}
      handleSubmit={handleSubmit}
    />
  );
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(Login);
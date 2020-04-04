import React, { useState } from "react";
import { connect } from 'react-redux';
import Page from './Page';
import login from '../../redux/actions/login';

const Login = (props) => {
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  return (
    <Page 
      /*email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}*/
    />
  );
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(Login);
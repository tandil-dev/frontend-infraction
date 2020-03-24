import React, { useState } from "react";
import { connect } from 'react-redux';

import Page from './Page';

import login from '../../redux/actions/login';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 /* const { register, errors , handleSubmit} = useForm()
  const onSubmit = data => {console.log(data)
    //event.preventDefault();
    props.login({
      email,
      password,
    });
  };
*/

  return (
    <Page 
      /*email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}*/
      //handleSubmit={handleSubmit(onSubmit)}
    />
  );
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(Register);
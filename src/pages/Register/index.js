import React from "react";
import { connect } from 'react-redux';

import Page from './Page';

import register from '../../redux/actions/register';

const Register = (props) => {
  return (
    <Page />
  );
}

const mapDispatchToProps = {
  register,
}

export default connect(null, mapDispatchToProps)(Register);
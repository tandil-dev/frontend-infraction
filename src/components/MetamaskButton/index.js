import React from 'react';
import { IconButton } from '@material-ui/core';
import MetamaskIcon from './metamask.svg';

const MetamaskLogin = ({ onClick }) => (
  <IconButton
    component="span"
    fullWidth
    color="primary"
    onClick={onClick}
  >
    <img src={MetamaskIcon} height={150} width={150} alt="Metamask" />
  </IconButton>
);

export default MetamaskLogin;

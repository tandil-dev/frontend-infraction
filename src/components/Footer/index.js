import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar, Paper, Tabs, Tab,
} from '@material-ui/core';

import { AccountCircle, AddAPhoto } from '@material-ui/icons';

import MetamaskGateway from '../MetamaskGateway';

import IconMenu from './IconMenu';

import useStyles from './styles';

const Footer = ({ currentUser }) => {
  const classes = useStyles();
  const isLogedIn = currentUser.jwt || currentUser.djwt;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isLogedIn && (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Paper square className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon tabs example"
            >
              <Tab icon={<AccountCircle />} label="Perfil" component={Link} to="/dashboard" />
              <MetamaskGateway>
                <Tab icon={<AddAPhoto />} label="Reportar" component={Link} to="/report" />
              </MetamaskGateway>
              <Tab icon={<IconMenu />} label="Más" />
            </Tabs>
          </Paper>
        </AppBar>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Footer));

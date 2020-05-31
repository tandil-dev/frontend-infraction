import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar, Toolbar, IconButton, Grid,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddAPhoto from '@material-ui/icons/AddAPhoto';

import MetamaskGateway from '../MetamaskGateway';

import IconMenu from './IconMenu';

import useStyles from './styles';

const Footer = ({ currentUser }) => {
  const classes = useStyles();
  const isLogedIn = currentUser.jwt || currentUser.djwt;

  return (
    <>
      {isLogedIn && (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Grid container className={classes.grid}>
              <Grid item xs={4}>
                <IconButton color="inherit" component={Link} to="/profile">
                  <AccountCircle />
                </IconButton>
              </Grid>

              <Grid item xs={4}>
                <MetamaskGateway>
                  <IconButton color="inherit" component={Link} to="/report">
                    <AddAPhoto />
                  </IconButton>
                </MetamaskGateway>
              </Grid>

              <Grid item xs={4}>
                <IconMenu />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Footer));

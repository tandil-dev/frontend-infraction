// @flow
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import { AppBar } from '@material-ui/core';
import useStyles from './style';
import MetamaskGateway from '../MetamaskGateway';


import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddAPhoto from '@material-ui/icons/AddAPhoto';



const Footer = ({ currentUser }) => {
  const classes = useStyles();
  const isLogedIn = currentUser.jwt || currentUser.djwt;

  return (
    <>
      {isLogedIn && (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>

            <MetamaskGateway>
              <IconButton edge="start" color="inherit">
                <Fab color="secondary" aria-label="add" className={classes.fabButton} component={Link} to="report">
                  <AddAPhoto />
                </Fab>
              </IconButton>
            </MetamaskGateway>

            <div className={classes.grow} />

            <IconButton color="inherit">
              <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <AccountCircle />
              </Fab>
            </IconButton>

            <div className={classes.grow} />

            <IconButton edge="end" color="inherit">
              <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <MenuIcon />
              </Fab>
            </IconButton>

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

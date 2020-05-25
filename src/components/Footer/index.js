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

import Grid from '@material-ui/core/Grid';



const Footer = ({ currentUser }) => {
  const classes = useStyles();
  const isLogedIn = currentUser.jwt || currentUser.djwt;

  return (
      <>
      {isLogedIn && (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Grid container text-align="center">
              <Grid container item xs={12} spacing={0} justify="center">
                <Grid item xs={4} key={1} justify="center">
                    <IconButton color="inherit">
                      <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <AccountCircle />
                      </Fab>
                    </IconButton>
                  </Grid>

                <Grid item xs={4} key={0} justify="center">
                  <MetamaskGateway>
                    <IconButton edge="start" color="inherit">
                      <Fab color="secondary" aria-label="add" className={classes.fabButton} component={Link} to="report">
                        <AddAPhoto />
                      </Fab>
                    </IconButton>
                  </MetamaskGateway>
                </Grid>

                <Grid item xs={4} key={2} justify="center">
                    <IconButton edge="end" color="inherit">
                      <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <MenuIcon />
                      </Fab>
                    </IconButton>
                  </Grid>
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

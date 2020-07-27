import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar, Tabs, Tab,
} from '@material-ui/core';

import { AccountCircle, AddAPhoto } from '@material-ui/icons';

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
        <AppBar position="fixed" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="secondary"
            TabIndicatorProps={{ className: classes.indicator }}
          >
            <Tab icon={<AccountCircle className={classes.iconButton} />} label="Perfil" component={Link} to="/dashboard" className={classes.tab} />
            <Tab icon={<AddAPhoto className={classes.iconButton} />} label="Reportar" component={Link} to="/report" className={classes.tab} />
            <Tab icon={<IconMenu className={classes.iconButton} />} label="Más" className={classes.tab} />
          </Tabs>
        </AppBar>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Footer));

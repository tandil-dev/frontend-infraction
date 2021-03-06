import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

import { menuData } from './data';
import logout from '../../redux/actions/logout';

const useStyles = makeStyles(() => ({
  tab: {
    padding: 0,
  },
}));

// eslint-disable-next-line no-shadow
function IconMenu({ logout, history }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    // eslint-disable-next-line no-restricted-globals
    history.push('/login');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton className={classes.tab} color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuData.map(({ to, label }) => (
          <MenuItem component={Link} to={to} onClick={handleClose} key={label}>{label}</MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(withRouter(IconMenu));

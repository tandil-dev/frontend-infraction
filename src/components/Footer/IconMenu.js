import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuRounded';
=======

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
>>>>>>> ca36c5d81917f8bcc11f3e2113fd5a0033df8d89

import { menuData } from './data';
import logout from '../../redux/actions/logout';


// eslint-disable-next-line no-shadow
function IconMenu({ logout, history }) {
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
<<<<<<< HEAD
      <Button border-radius="50%" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
=======
      <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
>>>>>>> ca36c5d81917f8bcc11f3e2113fd5a0033df8d89
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

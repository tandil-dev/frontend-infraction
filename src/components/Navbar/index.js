import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logout from '../../redux/actions/logout';
import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 50,
    marginRight: theme.spacing(2),
  },
}));

const StyledNavbar = (props) => {
  function handleLogout() {
    props.logout();
    props.history.push('/login');
  }
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </a>
        <Typography variant="h6" className={classes.title}>
          InfractApp
        </Typography>
        {props.currentUser.jwt
          ? <Button color="inherit" onClick={handleLogout}>Log out</Button>
          : <Button color="inherit" href="/login">Log in</Button>}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StyledNavbar));

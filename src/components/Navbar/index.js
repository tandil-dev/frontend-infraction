import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logout from '../../redux/actions/logout';
import logo from './centinela.png';

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
    marginLeft: theme.spacing(-1),
  },
  Button: {
    textTransform: 'none',
  },
}));

// eslint-disable-next-line no-shadow
const StyledNavbar = ({ logout, history, currentUser }) => {
  function handleLogout() {
    logout();
    history.push('/login');
  }
  const classes = useStyles();
  const isLogedIn = currentUser.jwt || currentUser.djwt;
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </Button>
        <Typography variant="h6" className={classes.title}>
          Centinela
        </Typography>
        {isLogedIn
          ? (
            <>
              <Button color="inherit" className={classes.Button} size="large" onClick={handleLogout}>
                <Typography variant="h5">
                  Salir
                </Typography>
              </Button>
            </>
          )
          : (
            <Button component={Link} className={classes.Button} color="inherit" size="large" to="/login">
              <Typography variant="h5">
                Ingresar
              </Typography>
            </Button>
          )}
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

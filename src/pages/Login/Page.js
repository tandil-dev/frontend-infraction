import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Avatar, Link, Box, Typography, Container,
} from '@material-ui/core/';

import MetamaskGateway from '../../components/MetamaskGateway';
import MetamaskButton from '../../components/MetamaskButton';
import viewlogin from '../../redux/actions/viewLoginAction';
import useStyles from './style';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'This is free and unencumbered software released into the public domain. '}
      <Link color="inherit" href="https://unlicense.org/">
        Unlicense.org
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

function Page({ handleMetamaskLogin, login }) {
  const classes = useStyles();
  const onSubmit = () => {
    login();
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h4" className={classes.typography1}>
          Ingersar con Metamask
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          Haga click en la imagen para ingresar
        </Typography>
        <MetamaskGateway>
          <MetamaskButton onClick={handleMetamaskLogin} />
        </MetamaskGateway>
        <Typography variant="h6" className={classes.typography2}>
          o
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          Realice un recorrido por la aplicación
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={onSubmit}
        >
          Vista Previa
        </Button>
      </div>
      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = {
  login: viewlogin,
};

export default connect(null, mapDispatchToProps)(Page);

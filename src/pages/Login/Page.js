import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MetamaskGateway from '../../components/MetamaskGateway';
import MetamaskButton from '../../components/MetamaskButton';
import Form from './Form';
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

function Page({ handleMetamaskLogin }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" className={classes.typography1}>
          Sign in with Metamask
        </Typography>
        <MetamaskGateway>
          <MetamaskButton onClick={handleMetamaskLogin} />
        </MetamaskGateway>
        <Typography variant="h6" className={classes.typography2}>
          or
        </Typography>
        <Form />
      </div>
      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Page;

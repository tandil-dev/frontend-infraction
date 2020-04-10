import React from "react";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import AcountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Form from './form';
import useStyles from './style';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        InfractApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Page(){

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <AcountBoxIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit Profile
      </Typography>

      <Form />
      
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>
  );
}

export default Page;
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Page(props){

  const { register, errors , handleSubmit} = useForm()
  const onSubmit = data => {console.log(data)};
  //console.log(errors);

  const {
    email, password, onEmailChange, onPasswordChange,
  } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              inputRef={register({ 
                required: true, 
                maxLength: {
                value: 25,
                message: 'Max length is 25',
                }
              })}
            />
            {errors.firstName && errors.firstName.message}
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="lname"
              name="lastName"
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              autoFocus
              inputRef={register({ 
                required: true, 
                maxLength: {
                value: 20,
                message: 'Max length is 20',
                }
              })}
            />
            {errors.lastName && errors.lastName.message}
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="cuil"
              label="CUIL"
              name="cuil"
              autoComplete="cuil"
              inputRef={register({ 
                required: true, 
                pattern: {
                  value: /^[0-9]*$/i,
                  message: 'Invalid CUIL, only numbers allowed',
                },
                maxLength: {
                  value: 9,
                  message: 'CUIL too long',
                },
                minLength: {
                  value: 9,
                  message: 'CUIL too short',
                }
              })}
            />
            {errors.cuil && errors.cuil.message}
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="tel"
              label="Phone number"
              name="tel"
              autoComplete="tel"
              inputRef={register({ 
                required: true, 
                pattern: {
                  value: /^[0-9]*$/i,
                  message: 'Invalid phone number, only numbers allowed',
                }
              })}
            />
            {errors.tel && errors.tel.message}
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
            />
            {errors.address && errors.address.message}
          </Grid>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register({ 
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && errors.email.message}
            </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.lastName && errors.lastName.message}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>
  );
}

export default Page;
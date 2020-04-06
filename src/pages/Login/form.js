import React from "react";
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import login from '../../redux/actions/login';


function Form(props){
  const { register, errors , handleSubmit} = useForm()
  const classes = useStyles();
  const onSubmit = data => {
    props.login(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>              
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            inputRef={register({ 
              required: true,               
              minLength: {
                value: 9,
                message: 'Password too short, at least 8 characters.',
              }
            })}
          />
          {errors.password && errors.password.message}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}
  
const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(Form);
import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import login from '../../redux/actions/login';


function Form(props) {
  const { register, errors, handleSubmit } = useForm();
  const classes = useStyles();
  const onSubmit = (data) => {
    props.login(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            
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
            
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({
              required: true,
              minLength: {
                value: 8,
                message: 'Password too short, at least 8 characters.',
              },
            })}
          />
          {errors.password && errors.password.message}
        </Grid>
      </Grid>
      <Button
        type="submit"
        
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Sign In
      </Button>
    </form>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Form);

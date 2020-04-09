import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import register from '../../redux/actions/register';


function Form(props){
  const { register, errors , handleSubmit} = useForm()
  const classes = useStyles();
  const onSubmit = data => {
    props.register(data);
  };

  return (
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
                {errors.password && errors.password.message}
              </Grid>
            </Grid>
            <Button
              component={Link}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              to="profile"

            >
              Update
            </Button>
          </form>
  )
}  

const mapDispatchToProps = {
  register,
}

export default connect(null, mapDispatchToProps)(withRouter(Form));
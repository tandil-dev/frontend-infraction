import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import viewlogin from '../../redux/actions/viewloginaction';


function Form(props) {
  const { register, errors, handleSubmit } = useForm();
  const classes = useStyles();
  const onSubmit = (data) => {
    props.login();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Vista Preveia
      </Button>
    </form>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Form);

import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';


const InfractionList = ({ infractions }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Typography color="primary" className={classes.typography} variant="h6" >Reportar una Infracción</Typography>
        <Typography className={classes.typography} ariant="body1" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Typography>
        <Button variant="contained" color="secondary" >Registrarse</Button>
      </Paper>
    </>
  );
};

export default InfractionList;

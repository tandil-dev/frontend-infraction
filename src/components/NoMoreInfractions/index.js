import React from 'react';
import {
  Button, Typography, makeStyles, Grid,
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
  },

}));

const NoMoreInfractions = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" className={classes.header}> Esas son todas las infracciones por ahora </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Volver
        </Button>
      </Grid>
    </Grid>
  );
};
export default withRouter(NoMoreInfractions);

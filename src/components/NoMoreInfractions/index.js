import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Button, Typography, Grid,
} from '@material-ui/core';

import useStyles from './styles';

const NoMoreInfractions = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
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

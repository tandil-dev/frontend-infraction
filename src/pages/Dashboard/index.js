import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import useStyles from './styles';
import TotalReportedInfractions from '../../components/TotalReportedInfactions';
import Rewards from '../../components/RewardsCard';

function Dashboard() {
  const classes = useStyles();
  return (
    <Grid container justify="space-around" className={classes.grid}>
      <Grid item md={3} xs={11} className={classes.gridItem}>
        <TotalReportedInfractions />
      </Grid>
      <Grid item md={3} xs={11} className={classes.gridItem}>
        <Rewards />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Dashboard));

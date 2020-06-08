import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { cardsData } from './data';
import DashBoardCard from '../../components/DashBoardCard';

function Dashboard() {
  const classes = useStyles();
  return (
    <Grid container justify="space-around" className={classes.grid}>
      {/* <MyReportedInfractionsCard /> */}
      {cardsData.map((i) => (
        <Grid item md={3} xs={11} className={classes.gridItem} key={i.mainText}>
          <DashBoardCard {...i} />
        </Grid>
      ))}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Dashboard));

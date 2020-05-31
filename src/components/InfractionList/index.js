import React from 'react';
import { observe } from '@embarklabs/subspace-react';
import { Grid, LinearProgress } from '@material-ui/core';
import InfractionCard from '../InfractionCard';
import useStyles from './styles';

const InfractionList = ({ infractions }) => {
  const classes = useStyles();
  if (!infractions) {
    return <LinearProgress />;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        {infractions.map((i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={i.blockNumber + i.createdBy}>
            <InfractionCard
              {...i}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default observe(InfractionList);

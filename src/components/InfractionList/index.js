import React from 'react';
import { observe } from '@embarklabs/subspace-react';
import { Grid, LinearProgress } from '@material-ui/core';
import InfractionCard from '../InfractionCard';
import { mockedInfractionList } from './consts';

const InfractionList = ({ infractions, mocked }) => {
  if (!mocked && !infractions) {
    return <LinearProgress />;
  }
  const infrac = mocked ? mockedInfractionList : infractions;
  return (
    <Grid container spacing={2} alignItems="center">
      {infrac.map((i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={i.blockNumber + i.createdBy}>
          <InfractionCard
            {...i}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default observe(InfractionList);

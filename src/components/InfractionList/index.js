import React from 'react';
import { Grid } from '@material-ui/core';
import InfractionCard from '../InfractionCard';
import useStyles from './styles';


const InfractionList = ({ infractions }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        {infractions.map((i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={i.hash}>
            <InfractionCard
              {...i}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InfractionList;

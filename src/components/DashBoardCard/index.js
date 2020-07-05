import React from 'react';
import { observe } from '@embarklabs/subspace-react';
import {
  Card, Typography, CardContent, LinearProgress,
} from '@material-ui/core';

import useStyles from './styles';

function DashboardCard({ mainText, secondaryText, isReward }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {mainText}
        </Typography>
        { secondaryText || secondaryText === 0
          ? (
            <Typography variant="body2" color="textSecondary">
              {isReward ? secondaryText / 10 : secondaryText}
            </Typography>
          )
          : <LinearProgress />}
      </CardContent>
    </Card>
  );
}

export default observe(DashboardCard);

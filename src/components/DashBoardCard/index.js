import React from 'react';
import {
  Card, Typography, CardContent,
} from '@material-ui/core';

import useStyles from './styles';

function DashboardCard({ mainText, secondaryText }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {mainText}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {secondaryText}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default (DashboardCard);

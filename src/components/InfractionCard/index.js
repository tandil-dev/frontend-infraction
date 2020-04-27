import React from 'react';
import {
  CardMedia, Card, CardActionArea, CardActions, Typography, Button, CardContent,
} from '@material-ui/core';

import useStyles from './styles';

export default function InfactionCard({ createdTime }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/logo.svg"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {createdTime}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View on EtherScan
        </Button>
      </CardActions>
    </Card>
  );
}

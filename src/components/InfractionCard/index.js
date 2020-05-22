import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  CardMedia, Card, CardActionArea, CardActions, Typography, Button, CardContent,
} from '@material-ui/core';

import useStyles from './styles';

function InfactionCard({ blockNumber, createdBy, infractionAddress }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/infractions/${infractionAddress}`}>
        <CardMedia
          className={classes.media}
          image="/logo.svg"
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            Bloque
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {blockNumber}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Creador
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${createdBy.slice(0, 6)} ... ${createdBy.slice(-4)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" fullWidth component={Link} to={`/infractions/${infractionAddress}`}>
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
}

export default (withRouter(InfactionCard));

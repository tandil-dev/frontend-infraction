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
          <Typography variant="h6">
            Bloque
          </Typography>
          <Typography variant="body2">
            {blockNumber}
          </Typography>
          <Typography variant="h6">
            Creador
          </Typography>
          <Typography variant="body2">
            {`${createdBy.slice(0, 6)} ... ${createdBy.slice(-4)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined" fullWidth component={Link} to={`/infractions/${infractionAddress}`}>
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
}

export default (withRouter(InfactionCard));

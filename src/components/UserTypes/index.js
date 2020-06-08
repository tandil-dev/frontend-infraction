import React from 'react';
import {
  Card, Button, Typography, Grid,
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { cardsInfo } from './data';
import useStyles from './styles';

const UserType = () => {
  const classes = useStyles();
  return (
    <>
      {cardsInfo.map((card) => (
        <Grid item md={3} sm={4} xs={12} className={classes.item} key={card.info}>
          <Card className={classes.card}>
            <Typography align="center" variant="h5" component="h2" className={classes.header}>{card.title}</Typography>
            <Typography align="justify" variant="body1" component="p" className={classes.info}>{card.info}</Typography>
            <Button
              component={Link}
              to={card.to}
              variant="contained"
              fullWidth
            >
              {card.buttonLabel}
            </Button>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default withRouter(UserType);

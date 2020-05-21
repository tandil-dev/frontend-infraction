import React from 'react';
import {
  Card, Button, Typography, makeStyles, Grid,
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { cardsInfo } from './data';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    padding: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  info: {
    margin: theme.spacing(2, 0),
  },
}));

const UserType = () => {
  const classes = useStyles();
  return (
    <>
      {cardsInfo.map((card) => (
        <Grid item xs={12} className={classes.item} key={card.info}>
          <Card className={classes.card}>
            <Typography align="center" variant="h6" component="h2" className={classes.header}>{card.title}</Typography>
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

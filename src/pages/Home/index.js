import React from 'react';
import ReactPlayer from 'react-player';
import {
  Card, CardMedia, Grid, Typography,
} from '@material-ui/core';
import UserTypes from '../../components/UserTypes';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.header}
      >
        <CardMedia
          className={classes.media}
          component="img"
          title="home"
          image="https://images.clarin.com/2018/07/07/multas-de-transito-que-tramites___S105h50MX_1256x620__2.jpg"
        />
      </Card>
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h2" className={classes.header}>¿Qué es Centinela?</Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <ReactPlayer
            url="https://youtu.be/HfUFuNCZ3T8"
            width="100%"
            controls="true"
          />
        </Grid>
        <Grid
          className={classes.root}
          container
          align="center"
          justify="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" className={classes.header}>
              ¿A quién está dirigida la aplicación?
            </Typography>
          </Grid>
          <UserTypes />
          <Grid item sm={6} xs={12}>
            <ReactPlayer
              url="https://youtu.be/15jzJiw7gJw"
              width="100%"
              controls="true"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

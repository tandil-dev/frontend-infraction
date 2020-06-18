import React from 'react';
import ReactPlayer from 'react-player';
import {
  Card, CardMedia, Grid, Typography, List, ListItemText,
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
            <Typography variant="h5" component="h2" className={classes.header}>
              ¿A quién está dirigida la aplicación?
            </Typography>
          </Grid>
          <UserTypes />
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" className={classes.header}>
              ¿Qué denuncias puedo hacer?
            </Typography>
            <List component="nav">
              <ListItemText primary="Estacionamiento en cordón amarillo." />
              <ListItemText primary="Obstruye rampa/espacio reservado." />
              <ListItemText primary="Estaciona obstruyendo senda peatonal." />
              <ListItemText primary="Estaciona obstruyendo ochava." />
              <ListItemText primary="Estaciona sobre la senda peatonal." />
              <ListItemText primary="Estacionamiento para bicicletas." />
              <ListItemText primary="Estacionamiento sobre espacios verdes." />
              <ListItemText primary="Estaciona en doble o triple fila." />
            </List>
          </Grid>
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

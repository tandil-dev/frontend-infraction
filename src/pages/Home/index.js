import React from 'react';
import ReactPlayer from 'react-player';
import {
  Card, CardMedia, Grid, Typography, List, ListItemText, ListItem, ListItemIcon, Container,
} from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
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
      <Container>
        <Grid container justify="center" className={classes.root} spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h2" className={classes.header}>¿Qué es Centinela?</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <ReactPlayer
              url="https://youtu.be/HfUFuNCZ3T8"
              width="100%"
              controls
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" component="h2" className={classes.header}>
              ¿A quién está dirigida la aplicación?
            </Typography>
          </Grid>
          <Grid container justify="space-around">
            <UserTypes />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" className={classes.header}>
              ¿Qué denuncias puedo hacer?
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List component="nav">
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estacionamiento en sectores prohibidos" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo accesos" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Pasa semáforo en rojo" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Maniobras no permitidas" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Giros sin luces" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Incumplimiento de reglas de seguridad vial" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemText secondary="Basado en la Ley Nacional de Transito Nº 24.449." />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" className={classes.header}>
              ¿Cómo funciona?
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <ReactPlayer
              url="https://youtu.be/15jzJiw7gJw"
              width="100%"
              controls
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

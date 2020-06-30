import React from 'react';
import ReactPlayer from 'react-player';
import {
  Card, CardMedia, Grid, Typography, List, ListItemText, ListItem, ListItemIcon,
} from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';
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
            <Typography variant="h5" component="h2" className={classes.header}>
              ¿Qué denuncias puedo hacer?
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List component="nav">
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Circula de noche sin luces" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona doble o triple fila" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona en cordón amarillo" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona en zona restringida fuera de horario" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo bici senda" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo garaje" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo ochava" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo rampa y/o espacio reservado" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo senda aeróbica" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo senda peatonal" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Estaciona obstruyendo vereda" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Gira a la izquierda en avenida" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Gira sin luces" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Pasa semáforo en rojo" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Sobrepasa en ruta con línea amarilla" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Uso de celular en movimiento" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Motociclista sin casco" className={classes.list} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LensIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary="Motociclista excedido de pasajeros" className={classes.list} />
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
              controls="true"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

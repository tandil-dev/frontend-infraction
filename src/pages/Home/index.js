import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import useStyles from './style';

export default function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Grid
        justify="center"
      >
          <Card>
            <CardMedia sm
              className={classes.media}
              component="img"
              title="home"
              image="https://images.clarin.com/2018/07/07/multas-de-transito-que-tramites___S105h50MX_1256x620__2.jpg"
            />
          </Card>
        </Grid>
      <Grid
        container
        justify="center"
      >
        <Typography className={classes.typography} variant="h4" >¿Qué es "Centinela"?</Typography>
        <Typography className={classes.typography} ariant="body1" >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        className={classes.paper}
      >
        <Paper elevation={3}>
          <Typography className={classes.typography} variant="h6" >Reportar una Infracción</Typography>
          <Typography className={classes.typography} ariant="body1" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Typography>
          <Button variant="contained" color="secondary" >Registrarse</Button>
        </Paper>
      </Grid>
      <Grid
        className={classes.popup}
        container
        justify="center"
      >
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          ¿Qué denuncias puedo hacer?
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            <ul>
              <li>Estacionamiento en cordon amarillo</li>
              <li>Obstrucción de Rampa/Espacio dreservado</li>
              <li>Obstrucción de senda peatonal</li>
              <li>Obstrucción de ochava</li>
              <li>Estaciona sobre senda peatonal</li>
              <li>Estaciona sobre espacios verdes</li>
              <li>Estaciona en dobre o triple fila</li>
            </ul>
          </Typography>
        </Popover>
      </Grid>
      <Grid
        container
        justify="center"
      >
        <Grid item sm>
          <Card>
            <CardMedia
              className={classes.media}
              component={ReactPlayer}
              url="https://youtu.be/70asKwy15Ds"
              width="100%"
              height="100%"
            />
          </Card>
        </Grid>
        <Grid item sm>
          <Card>
            <CardMedia
              className={classes.media}
              component={ReactPlayer}
              url="https://youtu.be/YVgfHZMFFFQ"
              width="100%"
              height="100%"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

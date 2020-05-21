import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  Card, CardMedia, Grid, List, ListItem, Typography, ListItemIcon, ListItemText,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import UserTypes from '../../components/UserTypes';
import useStyles from './style';
import { infracionList } from './data';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.header}
      >
        <CardMedia
          sm
          className={classes.media}
          component="img"
          title="home"
          image="https://images.clarin.com/2018/07/07/multas-de-transito-que-tramites___S105h50MX_1256x620__2.jpg"
        />
      </Card>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" align="center" className={classes.header}>¿Qué es Centinela?</Typography>
          <Typography ariant="body1" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Typography>
        </Grid>
        <Grid
          className={classes.userType}
          container
          alignItems="center"
        >
          <UserTypes />
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" component="h2">
            ¿Qué denuncias puedo hacer?
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.infracionList}>
          <List component="nav" aria-label="main mailbox folders">
            { infracionList.map((i) => (
              <ListItem button component={Link} to="report">
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary={i} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} className={classes.videoPlayer}>
          <ReactPlayer
            light
            url="https://youtu.be/70asKwy15Ds"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} className={classes.videoPlayer}>
          <ReactPlayer
            light
            url="https://youtu.be/YVgfHZMFFFQ"
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
}

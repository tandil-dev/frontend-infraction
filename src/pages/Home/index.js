import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import Card from '@material-ui/core/Card';
import useStyles from './style';
import './videoStyle.css';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Home
          </Typography>
        </div>
      </Container>
      <Grid
        container
        justify="space-between"
      >
        <Grid item sm>
          <Card className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/70asKwy15Ds"
              playing
              width="100%"
              height="100%"
            />
          </Card>
        </Grid>
        <Grid item sm>
          <Card className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/YVgfHZMFFFQ"
              playing
              width="100%"
              height="100%"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

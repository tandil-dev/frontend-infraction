import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

export default function Home() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">      
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        Home
        </Typography>   
      </div>   
    </Container>
  );
}
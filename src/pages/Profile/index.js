import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";


function Profile({ currentUser }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      },
    }
  ));


  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">      
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        Profile
        </Typography>
        <Button component={Link} to="editProfile">Edit Profile</Button> 
      </div>   
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(withRouter(Profile));
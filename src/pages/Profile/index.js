import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


function Page() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(2, 0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
  ));

  const classes = useStyles();
  return (
    <Container>
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Profile
        </Typography>
        <Button component={Link} to="editProfile">Edit Profile</Button>
        <Button component={Link} to="MyInfractions">Mis infracciones</Button>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Page));

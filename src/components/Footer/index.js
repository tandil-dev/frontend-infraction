// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';


const Footer = ({ currentUser }) => {
  const classes = useStyles();
  const isLogedIn = currentUser.jwt || currentUser.djwt;
  return (
    <>
      {isLogedIn
        ? (
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
        )
        : <> </>}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(Footer));

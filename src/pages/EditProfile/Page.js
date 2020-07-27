import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Form from './Form';
import useStyles from './style';

function Page() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Editar perfil
        </Typography>
        <Form />
      </div>
    </Container>
  );
}

export default Page;

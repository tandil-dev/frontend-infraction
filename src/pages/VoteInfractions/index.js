import React from 'react';
import {
  Container, Grid, Button,
} from '@material-ui/core';
import InfractionDetails from '../../components/InfractionDetails';


function Page({ match }) {
  return (
    <Container>
      <InfractionDetails address={match.params.id} />
      <Grid container>
        <Grid item xs={6}>
          <Button fullWidth variant="contained">
            Invalida
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="secondary">
            Valida
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Page;

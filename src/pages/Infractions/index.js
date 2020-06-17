import React from 'react';
import Container from '@material-ui/core/Container';
import InfractionDetails from '../../components/InfractionDetails';


function Page({ match }) {
  return (
    <Container>
      <InfractionDetails address={match.params.id} showStage />
    </Container>
  );
}

export default Page;

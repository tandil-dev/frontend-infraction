import React from 'react';
import Container from '@material-ui/core/Container';
import InfractionDetails from '../../components/InfractionDetails';


function Page({ match }) {
  return (
    <Container>
      <InfractionDetails address={match.params.id} />
    </Container>
  );
}

export default Page;

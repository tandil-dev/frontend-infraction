import React from 'react';
import Container from '@material-ui/core/Container';
import InfractionDetails from '../../components/InfractionDetails';


function Pay({ match }) {
  return (
    <Container>
      <InfractionDetails address={match.params.id} showStage showPay />
    </Container>
  );
}

export default Pay;

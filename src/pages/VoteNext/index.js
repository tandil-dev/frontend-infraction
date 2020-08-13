/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSubspace } from '@embarklabs/subspace-react';
import {
  Grid, Button, LinearProgress, Container,
} from '@material-ui/core';
import InfractionDetails from '../../components/InfractionDetails';
import NoMoreInfrctions from '../../components/NoMoreInfractions';

import { infractionFactoryAddress, infractionFactoryAbi } from '../../web3/infractionFactory';
import { infractionAbi } from '../../web3/infraction';

function Page({ currentUser }) {
  const subspace = useSubspace();
  const [account, setAccount] = useState();
  const [index, setIndex] = useState(0);
  const [infractionFactory, setInfractionFactory] = useState();
  const [totalInfractions, setTotalInfractions] = useState();
  const [infractionAddress, setInfractionAddress] = useState();
  const [infraction, setInfraction] = useState();
  const [hasVoted, setHasVoted] = useState(true);
  const [mocked] = useState(currentUser.jwt);
  useEffect(() => {
    if (mocked || account || !subspace) return;

    subspace.web3.eth.getAccounts()
      .then(([a]) => {
        setAccount(a);
      });
  }, [subspace, account, mocked]);
  useEffect(() => {
    if (mocked || infractionFactory) return;
    setInfractionFactory(subspace.contract(
      { abi: infractionFactoryAbi, address: infractionFactoryAddress },
    ));
  }, [subspace, infractionFactory, mocked]);

  useEffect(() => {
    if (mocked || !infractionFactory || !subspace) return;
    infractionFactory.methods.getTotalInfactinsForVote().call()
      .then((total) => {
        setTotalInfractions(parseInt(total));
      });
  }, [subspace, infractionFactory, mocked]);

  useEffect(() => {
    if (mocked || !totalInfractions || !infractionFactory || index >= totalInfractions) return;
    infractionFactory.methods.infractionsForVote(index).call()
      .then((address) => {
        setInfractionAddress(address);
        setInfraction(subspace.contract(
          { abi: infractionAbi, address },
        ));
      });
  }, [totalInfractions, infractionFactory, index, subspace, mocked]);

  useEffect(() => {
    if (mocked || !infraction) return;
    infraction.methods.hasVoted(account).call()
      // eslint-disable-next-line consistent-return
      .then((voted) => {
        if (voted) return setIndex(index + 1);
        setHasVoted(voted);
      });
  }, [infraction, account, index, mocked]);

  async function handleTrue() {
    infraction.methods
      .vote(true)
      .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
      .then((r) => {
        console.log('Vote saved', r);
      })
    // eslint-disable-next-line no-console
      .catch((e) => console.log(e));

    setIndex(index + 1);
    setHasVoted(true);
    setInfraction(undefined);
    setInfractionAddress(undefined);
  }

  async function handleFalse() {
    infraction.methods
      .vote(false)
      .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
      .then((r) => {
        console.log('Vote saved', r);
      })
    // eslint-disable-next-line no-console
      .catch((e) => console.log(e));

    setIndex(index + 1);
    setHasVoted(true);
    setInfraction(undefined);
    setInfractionAddress(undefined);
  }

  async function handlePreview() {
    console.log('Preview mode.');
  }

  if (index >= totalInfractions) {
    return (
      <Container>
        <NoMoreInfrctions />
      </Container>
    );
  }
  return (
    <Container>
      { hasVoted && !mocked
        ? <LinearProgress />
        : (
          <>
            <InfractionDetails address={infractionAddress} mocked={mocked} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" onClick={mocked ? handlePreview : handleFalse}>
                  Invalida
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" color="secondary" onClick={mocked ? handlePreview : handleTrue}>
                  Valida
                </Button>
              </Grid>

            </Grid>
          </>
        )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Page);

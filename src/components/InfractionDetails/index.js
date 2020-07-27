/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSubspace } from '@embarklabs/subspace-react';
import { Grid, Typography, Button } from '@material-ui/core';
import Image from 'material-ui-image';
import ipfs from '../../web3/ipfs';
import { infractionAbi } from '../../web3/infraction';
import { rewardsAbi, rewardsAddress } from '../../web3/rewards';
import {
  headers, stages, mockedInfraction, mockedDomainInfrationHash,
} from './consts';
import useStyles from './styles';

function InfractionDetails({
  match, showStage, address, showPay, mocked,
}) {
  const subspace = useSubspace();
  const [infractionContract, setInfractionContract] = useState();
  const [rewardsContract, setRewardsContract] = useState();
  const [stage, setStage] = useState(mocked ? 1 : undefined);
  const [infractionDataHash, setInfractionDataHash] = useState();
  const [domainImageHash, setDomainImageHash] = useState(mocked ? mockedDomainInfrationHash : undefined);
  const [infractionInformtion, setInfractionInformation] = useState(mocked ? mockedInfraction : undefined);
  const classes = useStyles();

  useEffect(() => {
    if (mocked || infractionContract) return;
    setInfractionContract(subspace.contract({ abi: infractionAbi, address }));
  }, [subspace, infractionContract, match.params.id, mocked]);

  useEffect(() => {
    if (mocked || stage !== '5' || rewardsContract) return;
    setRewardsContract(subspace.contract({ abi: rewardsAbi, address: rewardsAddress }));
  }, [subspace, rewardsContract, stage, mocked]);

  useEffect(() => {
    if (mocked || !infractionContract) return;
    if (showStage) infractionContract.methods.stage().call().then(setStage);
    infractionContract.methods.infractionDataHash().call().then(setInfractionDataHash);
    infractionContract.methods.domainImageHash().call().then(setDomainImageHash);
  }, [subspace, infractionContract, showStage, mocked]);

  useEffect(() => {
    if (mocked || !infractionDataHash) return;
    const getFromIpfs = async (hash) => {
      try {
        const utf8decoder = new TextDecoder();
        const stream = (await ipfs).cat(hash, { recursive: false });
        let data = '';
        for await (const chunk of stream) {
          data += utf8decoder.decode(chunk);
        }
        console.log(JSON.parse(data));
        setInfractionInformation(JSON.parse(data));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };
    getFromIpfs(infractionDataHash);
  }, [infractionDataHash, mocked]);

  const pay = async () => {
    infractionContract.methods.setPaid()
      .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
      .then((r) => {
        // eslint-disable-next-line no-console
        console.log(r);
      });
  };

  const claim = async () => {
    rewardsContract.methods.claimReward(address)
      .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
      .then((r) => {
        // eslint-disable-next-line no-console
        console.log(r);
      });
  };

  console.log('domainImageHash', domainImageHash);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.header}>Detalles de la infracción</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h3">Dominio</Typography>
      </Grid>
      <Grid item xs={12}>
        { domainImageHash
            && (
            <Image
              src={`https://ipfs.infura.io/ipfs/${domainImageHash}`}
            />
            )}
      </Grid>

      {infractionInformtion && (
        <>
          {showStage && (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" component="h3">Estado</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">{stages[stage]}</Typography>
            </Grid>
          </>
          )}
          {showPay && stage === '4' && (
          <>
            <Grid item xs={4}>
              <Button onClick={pay} fullWidth variant="contained" color="secondary">Simular pago</Button>
            </Grid>
          </>
          )}
          {stage === '5' && (
          <>
            <Grid item xs={4}>
              <Button onClick={claim} fullWidth variant="contained" color="secondary">Reclamar recompensa!</Button>
            </Grid>
          </>
          )}
          {Object.entries(infractionInformtion).map(([k, v]) => {
            if (k === 'imagenDominio' || k === 'infractionVideo'
            || k === 'domainFile' || k === 'situationFile' || k === 'pruebas'
            || k === 'situationHash' || k === 'situationFiles'
            ) return null;
            return (
              <Grid container key={k + v}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">{headers[k]}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{v || 'No disponible'}</Typography>
                </Grid>
              </Grid>
            );
          })}
          <Button
            href={`https://ipfs.infura.io/ipfs/${infractionInformtion.situationHash}`}
            color="secondary"
            fullWidth
            rel="noopener noreferrer"
            target="_blank"
            variant="outlined"
            className={classes.button}
          >
            Ver imagenes y videos
          </Button>
        </>
      )}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(InfractionDetails));

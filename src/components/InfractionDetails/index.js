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
import { headers, stages } from './consts';
import useStyles from './styles';

function InfractionDetails({
  match, showStage, address, showPay,
}) {
  const subspace = useSubspace();
  const [infractionContract, setInfractionContract] = useState();
  const [rewardsContract, setRewardsContract] = useState();
  const [stage, setStage] = useState();
  const [infractionDataHash, setInfractionDataHash] = useState();
  const [domainImageHash, setDomainImageHash] = useState();
  const [infractionInformtion, setInfractionInformation] = useState();
  const classes = useStyles();

  useEffect(() => {
    if (infractionContract) return;
    setInfractionContract(subspace.contract({ abi: infractionAbi, address }));
  }, [subspace, infractionContract, match.params.id]);

  useEffect(() => {
    if (stage !== '5') return;
    if (rewardsContract) return;
    setRewardsContract(subspace.contract({ abi: rewardsAbi, address: rewardsAddress }));
  }, [subspace, rewardsContract, stage]);

  useEffect(() => {
    if (!infractionContract) return;
    if (showStage) infractionContract.methods.stage().call().then(setStage);
    infractionContract.methods.infractionDataHash().call().then(setInfractionDataHash);
    infractionContract.methods.domainImageHash().call().then(setDomainImageHash);
  }, [subspace, infractionContract, showStage]);

  useEffect(() => {
    if (!infractionDataHash) return;
    const getFromIpfs = async (hash) => {
      try {
        const utf8decoder = new TextDecoder();
        const stream = (await ipfs).cat(hash, { recursive: false });
        let data = '';
        for await (const chunk of stream) {
          data += utf8decoder.decode(chunk);
        }
        setInfractionInformation(JSON.parse(data));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };
    getFromIpfs(infractionDataHash);
  }, [infractionDataHash]);

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

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.header}>Detalles infracción</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">Dominio</Typography>
      </Grid>
      <Grid item xs={12} className={classes.image}>
        { domainImageHash
            && (
            <Image
              src={`https://ipfs.infura.io/ipfs/${domainImageHash}`}
            />
            )}
      </Grid>

      {infractionInformtion && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">Detalles </Typography>
          </Grid>
          {showStage && (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" component="h3">Estado</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">{stages[stage]}</Typography>
            </Grid>
          </>
          )}
          {showPay && stage === '4' && (
          <>
            <Grid item xs={12}>
              <Button onClick={pay} fullWidth variant="contained" color="secondary">Simular pago</Button>
            </Grid>
          </>
          )}
          {stage === '5' && (
          <>
            <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">Situación</Typography>
          </Grid>
          <Button
            href={`https://ipfs.infura.io/ipfs/${infractionInformtion.situationHash}`}
            color="primary"
            fullWidth
            rel="noopener noreferrer"
            target="_blank"
            // variant="outlined"
            className={classes.button}
          >
            Ver imagenes y videos
          </Button>

          {/* <Grid item xs={12}>
            <ReactJson src={infractionInformtion} collapseStringsAfterLength={20} />
          </Grid> */}
        </>
      )}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(InfractionDetails));

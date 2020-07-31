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
  headers, stages, mockedInfraction, mockedDomainInfrationHash, dateAndTimeKeys, descriptionKeys,
  MAP, vehicleType,
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
  const [domainImageHash, setDomainImageHash] = useState(mocked
    ? mockedDomainInfrationHash : undefined);
  const [infractionInformtion, setInfractionInformation] = useState(mocked
    ? mockedInfraction : undefined);
  const classes = useStyles();

  useEffect(() => {
    if (mocked || infractionContract) return;
    setInfractionContract(subspace.contract({ abi: infractionAbi, address }));
  }, [subspace, infractionContract, match.params.id, address, mocked]);

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

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.header}>Detalles de la infracción</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" component="h3">{`Tipo de infracción:  ${(infractionInformtion && (infractionInformtion.infractionType || infractionInformtion.InfractionType)) || 'No disponible'}`}</Typography>
      </Grid>

      <Grid item md={6} xs={12} className={classes.grid}>
        <Typography variant="h5" component="h3">Imágen dominio del vehículo</Typography>
        { domainImageHash
            && (
            <img
              alt="Imágen del dominio"
              className={classes.infractionImage}
              src={`https://ipfs.infura.io/ipfs/${domainImageHash}`}
            />
            )}
      </Grid>

      <Grid item md={6} xs={12} className={classes.gridRightItem}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.header}>Caracteristicas del vehículo</Typography>
          </Grid>
          <Grid item xs={12}>
            {infractionInformtion && descriptionKeys.map((v) => (
              <Grid container key={v}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">{headers[v]}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    {
                      infractionInformtion[v]
                      && v === 'vehicleType' ? vehicleType[infractionInformtion[v]] : infractionInformtion[v]
                      || 'No disponible'
                    }
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>

      {/* Segundo bloque */}
      <Grid item md={6} xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.header}>Ubicación</Typography>
          </Grid>
          <Grid item xs={12}>
            {infractionInformtion && dateAndTimeKeys.map((v) => (
              <Grid container key={v}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">{headers[v]}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{infractionInformtion[v] || 'No disponible'}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>

      <Grid item md={6} xs={12} className={classes.gridRightItem}>
        { domainImageHash && (
        <Image
          src={MAP.URL}
          aspectRatio={(MAP.WIDTH / MAP.HEIGHT)}
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

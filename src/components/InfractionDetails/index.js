/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSubspace } from '@embarklabs/subspace-react';
import ReactPlayer from 'react-player';
import { Grid, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import ipfs from '../../web3/ipfs';
import { abi } from '../../web3/infraction';
import { DOMINIO, SITUACION, headers } from './consts';
import useStyles from './styles';

function InfractionDetails({ match, showStage, address }) {
  const subspace = useSubspace();
  const [infractionContract, setInfractionContract] = useState();
  const [stage, setStage] = useState();
  const [infractionData, setInfractionData] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [domainUrl, setDomainUrl] = useState();
  const [infractionInformtion, setInfractionInformation] = useState();
  const classes = useStyles();

  useEffect(() => {
    if (infractionContract) return;
    setInfractionContract(subspace.contract({ abi, address }));
  }, [subspace, infractionContract, match.params.id]);

  useEffect(() => {
    if (!infractionContract) return;
    if (showStage) infractionContract.methods.stage().call().then(setStage);
    infractionContract.methods.infractionData().call().then(setInfractionData);
    infractionContract.methods.infractionVideoUrl().call().then(setVideoUrl);
    infractionContract.methods.infractionDomainUrl().call().then(setDomainUrl);
  }, [subspace, infractionContract, showStage]);

  useEffect(() => {
    if (!infractionData) return;
    const getFromIpfs = async () => {
      try {
        const utf8decoder = new TextDecoder();
        const stream = (await ipfs).cat(infractionData, { recursive: false });
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
    getFromIpfs();
  }, [infractionData]);


  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.header}>Detalles infrcción</Typography>
      </Grid>


      <Grid item xs={12}>
        <Typography variant="h5" component="h2">Situación</Typography>
      </Grid>
      <Grid item xs={12} className={classes.image}>
        {ReactPlayer.canPlay(videoUrl)
          ? (
            <ReactPlayer
              light
              url={videoUrl}
              width="100%"
            />
          )
          : (
            <Image
              src={videoUrl}
              aspectRatio={(SITUACION.WIDTH / SITUACION.HEIGHT)}
            />
          )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">Dominio</Typography>
      </Grid>
      <Grid item xs={12} className={classes.image}>
        {ReactPlayer.canPlay(domainUrl)
          ? (

            <ReactPlayer
              light
              url={domainUrl}
              width="100%"
            />
          )
          : (
            <Image
              src={domainUrl}
              aspectRatio={(DOMINIO.WIDTH / DOMINIO.HEIGHT)}
            />
          )}
      </Grid>

      {infractionInformtion && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">Detalles </Typography>
          </Grid>
          {showStage && (
            <Grid item xs={12}>
              <Typography variant="h6" component="h3">{stage}</Typography>
            </Grid>
          )}
          {Object.entries(infractionInformtion).map(([k, v]) => {
            if (k === 'imagenDominio' || k === 'infractionVideo') return null;
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

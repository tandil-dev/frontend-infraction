/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSubspace } from '@embarklabs/subspace-react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, CircularProgress, Button,
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';

import ipfs from '../../web3/ipfs';
import { infractionFactoryAbi, infractionFactoryAddress } from '../../web3/infractionFactory';
import { infractionsData } from './infractions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TransactionList({ currentReport }) {
  const [checked, setChecked] = useState(0);
  const classes = useStyles();
  const [ipfsHash, setIpfsHash] = useState(undefined);
  const subspace = useSubspace();
  const [infractionFactory, setInfractionFactory] = useState(null);

  async function saveToIpfs(reportData) {
    try {
      const ipfs2 = await ipfs; // ipfs is a promise here, need to await
      const result = [];
      for await (const resultPart of ipfs2.add([JSON.stringify(reportData)])) {
        result.push(resultPart);
      }
      setIpfsHash(result[0].path);
      setChecked(1);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  useEffect(() => {
    if (ipfsHash || !currentReport) return;
    saveToIpfs(currentReport);
  }, [currentReport]);

  useEffect(() => {
    if (infractionFactory) return;
    setInfractionFactory(subspace.contract({ abi: infractionFactoryAbi, address: infractionFactoryAddress }));
  }, [subspace]);

  const sendTx = async () => {
    if (!infractionFactory) return;

    infractionFactory.methods
      .createInfraction(ipfsHash, currentReport.infractionVideo, currentReport.imagenDominio)
      .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
      .then((r) => {
        // eslint-disable-next-line no-console
        console.log(r);
        setChecked(3);
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.log(e));

    setChecked(2);
  };

  useEffect(() => {
    if (!infractionFactory || !currentReport || !ipfsHash) return;
    sendTx();
  }, [ipfsHash, infractionFactory, currentReport]);

  return (
    <>
      <List className={classes.root}>
        {infractionsData.map((infraction, index) => {
          const labelId = infraction.text.replace(/ /g, ''); // Removes spaces
          return (
            <ListItem key={infraction.text} role={undefined} dense button>
              <ListItemIcon>
                {index < checked ? <CheckIcon /> : <CircularProgress />}
              </ListItemIcon>
              <ListItemText id={labelId} primary={infraction.text} />
            </ListItem>
          );
        })}
      </List>
      { checked > 1 && (<Button component={Link} color="primary" to="/" fullWidth>Terminar</Button>)}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentReport: state.currentReport.data,
});

export default connect(mapStateToProps)(withRouter(TransactionList));

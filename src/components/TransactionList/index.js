/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import all from 'it-all';
import { useSubspace } from '@embarklabs/subspace-react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, CircularProgress, Button, Typography,
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

function TransactionList({ currentReport, onBack }) {
  const [checked, setChecked] = useState(0);
  const classes = useStyles();
  const [domainIpfsHash, setDomainIpfsHash] = useState(undefined);
  const [ipfsHash, setIpfsHash] = useState(undefined);

  const subspace = useSubspace();
  const [infractionFactory, setInfractionFactory] = useState(null);

  async function saveToIpfs(reportData) {
    try {
      const ipfs2 = await ipfs; // ipfs is a promise here, need to await

      const fileObjectsArray = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < reportData.situationFiles.length; i++) {
        fileObjectsArray.push({
          path: reportData.situationFiles[i].name,
          content: reportData.situationFiles[i],
        });
      }

      const situationResult = await all(
        ipfs2.add(
          fileObjectsArray,
          {
            wrapWithDirectory: true,
            pin: true,
          },
        ),
      );
      const directory = situationResult.find(({ path }) => path === '');
      if (!directory) throw new Error('Error creating directory');
      setChecked(1);
      const domainResult = await all(ipfs2.add(reportData.domainFile, { pin: true }));
      setDomainIpfsHash(domainResult[domainResult.length - 1].cid.string);
      setChecked(2);
      const dataResult = await all(ipfs2.add([JSON.stringify({
        ...reportData,
        situationHash: directory.cid.string,
      })], { pin: true }));
      setIpfsHash(dataResult[dataResult.length - 1].cid.string);
      setChecked(3);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  useEffect(() => {
    if (ipfsHash || !currentReport) return;
    saveToIpfs(currentReport);
  }, [currentReport, ipfsHash]);

  useEffect(() => {
    if (infractionFactory) return;
    setInfractionFactory(subspace.contract(
      { abi: infractionFactoryAbi, address: infractionFactoryAddress },
    ));
  }, [subspace, infractionFactory]);

  useEffect(() => {
    if (!infractionFactory || !currentReport || !ipfsHash) return;
    const sendTx = async () => {
      if (!infractionFactory) return;

      infractionFactory.methods
        .createInfraction(ipfsHash, domainIpfsHash)
        .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
        .then((r) => {
          // eslint-disable-next-line no-console
          console.log(r);
          setChecked(5);
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.log(e));

      setChecked(4);
    };
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
      { checked > 3 && (
      <>
        <Typography variant="body1">
          Luego de confirmar la transacción, esta puede tardar un largo
          tiempo en crearse. De todas formas, puede salir de esta página. La infraccción
          aparecer en la lista de infracciones creadas cuando sea procesada.
        </Typography>
        <Button component={Link} color="primary" to="/" fullWidth onClick={onBack}>Atrás</Button>
      </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentReport: state.currentReport.data,
});

export default connect(mapStateToProps)(withRouter(TransactionList));

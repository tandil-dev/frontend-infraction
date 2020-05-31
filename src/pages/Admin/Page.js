/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { useSubspace } from '@embarklabs/subspace-react';

import {
  Tabs, Tab,
} from '@material-ui/core';

import InfractionTabPanel from './InfractionTabPanel';
import useStyles from './style';
import { infractionFactoryAbi, infractionFactoryAddress } from '../../web3/infractionFactory';
import { infractionAbi } from '../../web3/infraction';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const subspace = useSubspace();
  const [tab, setTab] = useState(1);
  const [infractionFactoryContract, setInfractionFactoryContract] = useState();
  const [totalInfractions, setTotalInfractions] = useState(0);
  const [page, setPage] = useState(1);
  const [address, setAddress] = useState();
  const [infractionContract, setInfractionContract] = useState();
  const classes = useStyles();

  useEffect(() => {
    if (infractionFactoryContract) return;
    setInfractionFactoryContract(
      subspace.contract({ abi: infractionFactoryAbi, address: infractionFactoryAddress }),
    );
  }, [subspace, infractionFactoryContract]);


  useEffect(() => {
    if (!infractionFactoryContract) return;

    const methods = ['getTotalInfactinsForVote', 'getTotalInfactinsForDepartmentReview', 'getTotalInfactinsForJudgeReview'];
    const method = methods[tab];
    infractionFactoryContract.methods[method]().call()
      .then((total) => {
        setTotalInfractions(parseInt(total));
      });
  }, [subspace, infractionFactoryContract, tab]);

  useEffect(() => {
    if (page > totalInfractions) console.log('Page out of range');
    if (!totalInfractions || page > totalInfractions) return;
    const methods = ['infractionsForVote(uint256)', 'infractionsForDepartmentReview(uint256)', 'infractionsForJudgeReview(uint256)'];
    const method = methods[tab];
    infractionFactoryContract.methods[method](page - 1).call()
      .then((_address) => {
        setAddress(_address);
      });
  }, [totalInfractions, tab, page]);

  useEffect(() => {
    if (infractionContract || !address) return;
    setInfractionContract(subspace.contract({ abi: infractionAbi, address }));
  }, [subspace, infractionContract, address]);

  const handleTabChange = (event, newValue) => {
    setAddress(undefined);
    setTotalInfractions(0);
    setTab(newValue);
    setPage(1);
  };

  const handlePageChange = (event, newValue) => {
    setAddress(undefined);
    setPage(newValue);
  };

  const handleAction = async (value) => {
    if (!infractionContract) return;
    const methods = {
      1: {
        true: 'departamentApproves()',
        false: 'departamentRejects()',
      },
      2: {
        true: 'courtApproves()',
        false: 'courtRejects()',
      },
    };
    const method = methods[tab][value];
    infractionContract.methods[method]()
      .send({ from: subspace.web3.eth.defaultAccount, gasLimit: 3000000 })
      .then((r) => {
        console.log('saved', r);
      });
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={tab}
        onChange={handleTabChange}
        aria-label="Menu"
        className={classes.tabs}
        fullWidth
      >
        <Tab label="Verificación comunitaria" {...a11yProps(0)} className={classes.tab} />
        <Tab label="Verificación en departamento" {...a11yProps(1)} className={classes.tab} />
        <Tab label="Verificación en juzgado" {...a11yProps(2)} className={classes.tab} />
        <Tab label="Todas" {...a11yProps(3)} className={classes.tab} />
      </Tabs>
      <InfractionTabPanel value={tab} index={0} address={address} totalInfractions={totalInfractions} page={page} handleChange={handlePageChange} handleAction={handleAction} />
      <InfractionTabPanel value={tab} index={1} address={address} totalInfractions={totalInfractions} page={page} handleChange={handlePageChange} handleAction={handleAction} />
      <InfractionTabPanel value={tab} index={2} address={address} totalInfractions={totalInfractions} page={page} handleChange={handlePageChange} handleAction={handleAction} />
      <InfractionTabPanel value={tab} index={3} address={address} totalInfractions={totalInfractions} page={page} handleChange={handlePageChange} />
    </div>
  );
}

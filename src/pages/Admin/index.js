/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { useSubspace } from '@embarklabs/subspace-react';
import { scan } from 'rxjs/operators';
import {
  Tabs, Tab,
} from '@material-ui/core';
import InfrationList from '../../components/InfractionList';
import InfractionTabPanel from './InfractionTabPanel';
import TabPanel from './TabPanel';

import useStyles from './style';
import { infractionFactoryAbi, infractionFactoryAddress, infractionFactorydeployBlock } from '../../web3/infractionFactory';
import { infractionAbi } from '../../web3/infraction';
import { tabs } from './tabs';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Admin() {
  const subspace = useSubspace();
  const [tab, setTab] = useState(1);
  const [infractionFactoryContract, setInfractionFactoryContract] = useState();
  const [totalInfractions, setTotalInfractions] = useState(0);
  const [page, setPage] = useState(1);
  const [address, setAddress] = useState();
  const [infractionContract, setInfractionContract] = useState();
  const [myInfractionsObservable$, setMyInfractionsObservable] = useState();

  const classes = useStyles();

  useEffect(() => {
    if (infractionFactoryContract) return;
    setInfractionFactoryContract(
      subspace.contract({ abi: infractionFactoryAbi, address: infractionFactoryAddress }),
    );
  }, [subspace, infractionFactoryContract]);


  useEffect(() => {
    if (!infractionFactoryContract || tab > 2) return;
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

  useEffect(() => {
    if (!infractionFactoryContract) return;
    subspace.web3.eth.getAccounts()
      .then(() => {
        const infractionsObservable = infractionFactoryContract.events.infractionCreated
          .track({
            filter: {
            },
            fromBlock: infractionFactorydeployBlock,
          })
          .pipe(scan((accum, val) => [...accum, val], []));

        setMyInfractionsObservable(infractionsObservable);
      });
  }, [subspace, infractionFactoryContract]);

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

  console.log(tab);
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={tab}
        onChange={handleTabChange}
        aria-label="Menu"
        className={classes.tabs}
      >
        {tabs.map((label, i) => (
          <Tab label={label} {...a11yProps(i)} className={classes.tab} key={label} />))}
      </Tabs>
      {tabs.slice(0, -1).map((label, i) => (
        <InfractionTabPanel
          value={tab}
          index={i}
          address={address}
          totalInfractions={totalInfractions}
          page={page}
          handleChange={handlePageChange}
          handleAction={handleAction}
          key={label}
        />
      ))}
      <TabPanel
        value={tab}
        index={tabs.length - 1}
      >
        <InfrationList infractions={myInfractionsObservable$} />
      </TabPanel>
    </div>
  );
}

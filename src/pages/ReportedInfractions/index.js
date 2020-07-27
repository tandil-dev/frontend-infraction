import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSubspace } from '@embarklabs/subspace-react';
import { scan } from 'rxjs/operators';
import {
  Typography, Grid,
} from '@material-ui/core';

import InfactionList from '../../components/InfractionList';
import { infractionFactoryAbi, infractionFactoryAddress, infractionFactorydeployBlock } from '../../web3/infractionFactory';

import useStyles from './styles';

function ReportedInfractions({ currentUser }) {
  const subspace = useSubspace();
  const [infractionFactoryContract, setInfractionFactoryContract] = useState();
  const [myInfractionsObservable$, setMyInfractionsObservable] = useState();
  const [mocked] = useState(!!currentUser.jwt);
  const classes = useStyles();

  useEffect(() => {
    if (infractionFactoryContract) return;
    setInfractionFactoryContract(
      subspace.contract({ abi: infractionFactoryAbi, address: infractionFactoryAddress }),
    );
  }, [subspace, infractionFactoryContract]);

  useEffect(() => {
    if (!infractionFactoryContract) return;
    subspace.web3.eth.getAccounts()
      .then(([account]) => {
        const infractionsObservable = infractionFactoryContract.events.infractionCreated
          .track({
            filter: {
              createdBy: account,
            },
            fromBlock: infractionFactorydeployBlock,
          })
          .pipe(scan((accum, val) => [...accum, val], []));

        setMyInfractionsObservable(infractionsObservable);
      });
  }, [subspace, infractionFactoryContract]);

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography component="h2" variant="h4" className={classes.header} align="center">
          Infracciones reportadas
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <InfactionList
          infractions={myInfractionsObservable$}
          mocked={mocked}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(withRouter(ReportedInfractions));

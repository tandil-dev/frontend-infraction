/* eslint-disable radix */
import React from 'react';
import {
  LinearProgress, Grid, Button, TextField,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import InfractionDetails from '../../components/InfractionDetails';
import TabPanel from './TabPanel';

const useStyles = makeStyles((theme) => ({
  grid: {
    'text-align': 'center',
  },
  input: {
    padding: theme.spacing(2, 0, 0, 0),
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
}));

const InfractionTabPanel = ({
  value, index, address, totalInfractions, page, handleChange, handleAction, handleInput,
  inputValue,
}) => {
  const classes = useStyles();

  return (
    <TabPanel value={value} index={index}>
      {!address
        ? <LinearProgress />
        : (
          <>
            <InfractionDetails address={address} />
            {handleAction && (
              <>
                <Grid container spacing={2} className={classes.input}>
                  <Grid item xs={3}>
                    <TextField
                      id="reward"
                      label="Valor recompensa en UF"
                      type="number"
                      onChange={(e) => { handleInput(parseInt(e.target.value)); }}
                      value={inputValue}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleAction(false)}>
                      Invalida
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth variant="contained" color="secondary" onClick={() => handleAction(true)}>
                      Valida
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={12}>
                <Pagination count={totalInfractions} page={page} onChange={handleChange} />
              </Grid>
            </Grid>
          </>
        )}
    </TabPanel>
  );
};

export default InfractionTabPanel;

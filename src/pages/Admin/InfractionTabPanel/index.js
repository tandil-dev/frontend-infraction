import React from 'react';
import {
  LinearProgress, Typography, Box, Grid, Button,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import InfractionDetails from '../../../components/InfractionDetails';

const useStyles = makeStyles(() => ({
  grid: {
    'text-align': 'center',
  },
}));

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const InfractionTabPanel = ({
  value, index, address, totalInfractions, page, handleChange, handleAction,
}) => {
  const classes = useStyles();
  return (
    <TabPanel value={value} index={index} fullWidth>
      {
      !address ? <LinearProgress />
        : (
          <>
            <InfractionDetails address={address} />
            {handleAction && (
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
            )}
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={12}>
                <Pagination count={totalInfractions} page={page} onChange={handleChange} />
              </Grid>
            </Grid>
          </>
        )
    }
    </TabPanel>
  );
};

export default InfractionTabPanel;

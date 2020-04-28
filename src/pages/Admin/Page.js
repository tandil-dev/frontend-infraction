import React from 'react';
import {
  Tabs, Tab, Box, Typography,
} from '@material-ui/core';

import InfractionList from '../../components/InfractionList';
import useStyles from './style';
import { infractions } from './mock';

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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Menu"
        className={classes.tabs}
      >
        <Tab label="Reportadas" {...a11yProps(0)} className={classes.tab} />
        <Tab label="Pendientes" {...a11yProps(1)} className={classes.tab} />
        <Tab label="Confirmadas" {...a11yProps(2)} className={classes.tab} />
        <Tab label="Saldadas" {...a11yProps(3)} className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <InfractionList infractions={infractions} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InfractionList infractions={infractions.slice(3)} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InfractionList infractions={infractions.slice(5)} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <InfractionList infractions={infractions.slice(7)} />
      </TabPanel>
    </div>
  );
}

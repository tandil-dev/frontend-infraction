import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './style';


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

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  index: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};

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
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Infracciones Reportadas" {...a11yProps(0)} />
        <Tab label="Infracciones Pendientes" {...a11yProps(1)} />
        <Tab label="Infracciones Confirmadas" {...a11yProps(2)} />
        <Tab label="Infracciones Saldadas" {...a11yProps(3)} />
        <Tab label="Entidades Beneficiadas" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Infracciones Reportadas
      </TabPanel>
      <TabPanel value={value} index={1}>
        Infracciones Pendientes
      </TabPanel>
      <TabPanel value={value} index={2}>
        Infracciones Confirmadas
      </TabPanel>
      <TabPanel value={value} index={3}>
        Infracciones Saldadas
      </TabPanel>
      <TabPanel value={value} index={4}>
        Entidades Beneficiadas
      </TabPanel>
    </div>
  );
}

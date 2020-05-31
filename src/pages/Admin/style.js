import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0, 0, 0, 1),
    minWidth: theme.spacing(20),
  },
  tab: {
  },
}));

export default useStyles;

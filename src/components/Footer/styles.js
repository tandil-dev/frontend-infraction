import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    top: 'auto',
    bottom: 0,
    maxHeight: 60,
  },
  tab: {
    padding: 0,
    margin: theme.spacing(1, 0),
    textTransform: 'none',
    lineHeight: '1',
    minHeight: 0,
  },
  iconButton: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  indicator: {
    display: 'none',
  },
}));

export default useStyles;

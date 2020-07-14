import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    'text-align': 'center',
    flexGrow: 1,
  },
  appBar: {
    top: 'auto',
    bottom: 5,
    maxHeight: 70,
  },
  tab: {
    padding: 0,
    textTransform: 'none',
  },

}));

export default useStyles;

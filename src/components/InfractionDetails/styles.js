import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(2, 0),
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(3, 0),
  },
  grid: {
    padding: theme.spacing(0, 0, 2, 0),
    textAlign: 'center',
  },
  gridRightItem: {
    padding: theme.spacing(0, 0, 0, 2),
  },
  infractionImage: {
    margin: theme.spacing(2, 0),
    maxHeight: '350px',
  },
}));

export default useStyles;

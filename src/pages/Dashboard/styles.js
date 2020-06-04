import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  gridItem: {
    margin: theme.spacing(0, 0, 2, 0),
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(1, 1, 3, 1),
  },
  grid: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;

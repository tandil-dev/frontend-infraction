import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(0, 0, 2, 0),
  },
  card: {
    padding: theme.spacing(3),
    alignItems: 'center',
  },
  header: {
    marginBottom: theme.spacing(0),
  },
  info: {
    margin: theme.spacing(1, 0),
  },
}));

export default useStyles;

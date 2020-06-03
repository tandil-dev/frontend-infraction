import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(0, 0, 2, 0),
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    padding: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  info: {
    margin: theme.spacing(4, 0),
  },
}));

export default useStyles;

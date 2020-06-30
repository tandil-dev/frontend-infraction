import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  root: {
    padding: theme.spacing(3, 1),
    textAlign: 'center',
  },
  section: {
    padding: theme.spacing(0, 0, 3, 0),
  },
  list: {
    margin: theme.spacing(0, 0),
    marginLeft: theme.spacing(-3),
  },
  icon: {
    fontSize: 20,
  },
}
));

export default useStyles;

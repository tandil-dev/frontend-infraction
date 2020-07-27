import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  root: {
    textAlign: 'center',
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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(1, 0),
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(3, 0),
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(2, 0),
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(3, 0),
  },
}));

export default useStyles;

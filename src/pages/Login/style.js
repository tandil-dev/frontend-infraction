import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  typography1: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  typography2: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
  body1: {
    margin: theme.spacing(2, 0),
  },
}));

export default useStyles;

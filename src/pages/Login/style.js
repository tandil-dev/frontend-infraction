import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  typography1: {
    marginTop: theme.spacing(1),
    'text-align': 'center',
  },
  typography2: {
    marginTop: theme.spacing(4),
    'text-align': 'center',
  },
}));

export default useStyles;

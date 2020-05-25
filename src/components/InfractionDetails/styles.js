import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(2, 0),
    'text-align': 'center',
  },
  image: {
    padding: theme.spacing(0, 0, 3, 0),
  },
}));

export default useStyles;

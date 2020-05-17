import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 500,
    alignItems: 'center',
  },
  typography: {
    padding: theme.spacing(2),
  },
}
));

export default useStyles;
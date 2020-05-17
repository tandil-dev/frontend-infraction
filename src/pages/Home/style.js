import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: "full-width",
  },
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

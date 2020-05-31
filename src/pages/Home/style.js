import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  root: {
    padding: theme.spacing(1),
  },
  userType: {
    padding: theme.spacing(1),
  },
  videoPlayer: {
    padding: theme.spacing(0, 0, 1, 0),
  },
  infracionList: {
    padding: theme.spacing(0, 0, 2, 0),
  },
}
));

export default useStyles;

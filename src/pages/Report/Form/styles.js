import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(12),
  },
  autocomplete: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}
));

export default useStyles;

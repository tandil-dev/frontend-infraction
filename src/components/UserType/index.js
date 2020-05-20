import React from 'react';
import { Card, Button, Typography, makeStyles, Grid } from '@material-ui/core';
import { cardsInfo } from './data';
import { withRouter, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  typography: {
    padding: theme.spacing(10),
  },
}
));

export type DataType = {
  href: string,
  info: string,
  shortText: string,
  buttonLabel: string,
};

type PropsType = {
  main?: boolean,
  data?: DataType[]
};

const UserType = ({ main, data = cardsInfo }: PropsType) => {
  const classes = useStyles;
  return (
    <Grid item sm className={classes.root}> 
      {data.map(info => (
        <Card
          key={info.href}
          {...info}
          main={main}
        >
          <Typography className={classes.typography} ariant="body1" >{info.shortText}</Typography>
          <Button 
            component={Link} 
            to="login"
            variant="contained" 
            color="secondary" 
          > {info.buttonLabel} </Button>
        </Card>
      ))}
    </Grid>
  );
};
export default withRouter(UserType);
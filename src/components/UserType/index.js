import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import cardsInfo from './data';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';



export type DataType = {
  href: string,
  title: string,
  text: string,
  linkText: string,
  shortText: string,
  buttonLabel: string,
  imgWidth: number
};

type PropsType = {
  main?: boolean,
  data?: DataType[]
};

const UserType = ({ main, data = cardsInfo }: PropsType) => {
  const classes = useStyles();
  return (
    <Paper lassName={classes.paper} elevation={3}>
      {data.map(info => (
        <Card
          key={info.href}
          {...info}
          main={main}
        >
          <Typography className={classes.typography} color="primary"  variant="h6" >{info.title}</Typography>
          <Typography  className={classes.typography} ariant="body1" >{info.shortText}</Typography>
          <Button variant="contained" color="secondary" >Intresar</Button>
        </Card>
      ))}
    </Paper>
  );
};
export default UserType;
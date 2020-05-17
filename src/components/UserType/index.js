import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import cardsInfo from './data';

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

const UserType = ({ main, data = cardsInfo }: PropsType) => (
  <Paper>
    {data.map(info => (
      <Card
        key={info.href}
        {...info}
        main={main}
      >
        {info.title}
      </Card>
    ))}
  </Paper>
);
export default UserType;
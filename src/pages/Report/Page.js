import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container, Stepper, Step, StepLabel, Typography,
} from '@material-ui/core';

import TransactionList from '../../components/TransactionList';
import Form from './Form';
import useStyles from './styles';

function Page({ onSubmit, onStepBack, step }) {

  const steps = ['Cargar datos', 'Procesando'];
  const classes = useStyles();

  return (
    <Container component="main">
      <Typography className={classes.header} variant="h4">Reportar Infracción</Typography>
      <Stepper activeStep={step}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {step === 0
        ? (
          <Form
            onSubmit={onSubmit}
            onStepBack={onStepBack}
          />
        )
        : <TransactionList />}
    </Container>
  );
}

export default withRouter(Page);

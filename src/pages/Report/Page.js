import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container, Stepper, Step, StepLabel,
} from '@material-ui/core';

import TransactionList from '../../components/TransactionList';
import Form from './Form';

function Page({ onSubmit, onBack, step }) {
  const steps = ['Cargar datos', 'Procesando'];

  return (
    <Container component="main">
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
            onBack={onBack}
          />
        )
        : (
          <TransactionList
            onBack={onBack}
          />
        )}
    </Container>
  );
}

export default withRouter(Page);

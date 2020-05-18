import React, { useState } from 'react';
import { connect } from 'react-redux';
import Page from './Page';

import reportInfractionAction from '../../redux/actions/reportInfractionAction';

function Report({ reportInfraction }) {
  const [step, setStep] = useState(0);

  const onSubmit = (data) => {
    setStep(step + 1);
    reportInfraction(data); // enviar a redux la data
  };

  return (
    <>
      <Page
        onSubmit={onSubmit}
        step={step}
      />
    </>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToPros = {
  reportInfraction: reportInfractionAction,
};

export default connect(mapStateToProps, mapDispatchToPros)(Report);

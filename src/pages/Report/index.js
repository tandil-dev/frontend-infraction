import React, { useState } from 'react';
import { connect } from 'react-redux';
import Page from './Page';
import reportInfractionAction from '../../redux/actions/reportInfractionAction';

function Report({ reportInfraction }) {
  const [step, setStep] = useState(0);

  const onSubmit = (data) => {
    setStep(step + 1);
    reportInfraction({
      ...data,
      situationFiles: data.situationFiles,
      domainFile: data.domainFile[0],
    });
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

const mapDispatchToPros = {
  reportInfraction: reportInfractionAction,
};

export default connect(null, mapDispatchToPros)(Report);

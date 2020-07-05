import React, { useState } from 'react';
import { connect } from 'react-redux';
import Page from './Page';
import reportInfractionAction from '../../redux/actions/reportInfractionAction';
import cleanFilesAction from '../../redux/actions/cleanFilesAction';

function Report({ reportInfraction, cleanFiles }) {
  const [step, setStep] = useState(0);

  const onSubmit = (data) => {
    setStep(step + 1);
    reportInfraction({
      ...data,
      domainFile: data.domainFile,
    });
  };

  const onBack = () => {
    setStep(0);
    cleanFiles();
  };

  return (
    <>
      <Page
        onSubmit={onSubmit}
        onBack={onBack}
        step={step}
      />
    </>
  );
}

const mapDispatchToPros = {
  reportInfraction: reportInfractionAction,
  cleanFiles: cleanFilesAction,
};

export default connect(null, mapDispatchToPros)(Report);

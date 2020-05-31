import React, { useState } from 'react';
import { connect } from 'react-redux';
import Page from './Page';
import { DOMINIO, SITUACION } from './consts';
import reportInfractionAction from '../../redux/actions/reportInfractionAction';

function Report({ reportInfraction }) {
  const [step, setStep] = useState(0);

  const onSubmit = (data) => {
    setStep(step + 1);
    reportInfraction({
      ...data,
      infractionVideo: SITUACION.URL,
      imagenDominio: DOMINIO.URL,
    }); // enviar a redux la data
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

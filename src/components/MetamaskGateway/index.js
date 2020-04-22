import React from 'react';
import MetamaskDownload from './MetamaskDownload';

const MetamaskGateway = ({ children }) => {
  const isWeb3Browser = !!window.ethereum;
  if (isWeb3Browser) {
    console.log('Hay metamask');
  } else {
    console.log('No hay metamask');
  }

  return isWeb3Browser
    ? children
    : (
      <MetamaskDownload />
    );
};

export default MetamaskGateway;

import React from 'react';
import MetamaskDownload from './MetamaskDownload';

const MetamaskGateway = ({ children }) => {
  const isWeb3Browser = !!window.ethereum;

  return isWeb3Browser
    ? children
    : (
      <MetamaskDownload />
    );
};

export default MetamaskGateway;

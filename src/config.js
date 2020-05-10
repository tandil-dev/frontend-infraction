/* eslint-disable eqeqeq */
/* eslint-disable no-undef */

// const chainId = (window.ethereum && ethereum.chainId) || 3;
const network = process.env.REACT_APP_ROPSTEN_NETWORK;
const smartContrAddress = process.env.REACT_APP_SMART_CONTRACT_ADDRESS_ROPSTEN;
const initialBlock = 7604005;

export {
  network,
  smartContrAddress,
  initialBlock,
};

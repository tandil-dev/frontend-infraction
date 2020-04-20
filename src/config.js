/* eslint-disable eqeqeq */
/* eslint-disable no-undef */

const chainId = (window.ethereum && ethereum.chainId) || 3;
const network = chainId == 20
  ? process.env.REACT_APP_LOCAL_NETWORK
  : process.env.REACT_APP_ROPSTEN_NETWORK;
const smartContrAddress = chainId == 20
  ? process.env.REACT_APP_SMART_CONTRACT_ADDRESS_LOCAL
  : process.env.REACT_APP_SMART_CONTRACT_ADDRESS_ROPSTEN;
const initialBlock = chainId == 20 ? 1 : 7604005;

export {
  network,
  smartContrAddress,
  initialBlock,
};

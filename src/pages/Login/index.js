import React from 'react';
import { useSubspace } from '@embarklabs/subspace-react';
import { connect } from 'react-redux';

import loginWithMetamaskAction from '../../redux/actions/loginWithMetamaskAction';

import Page from './Page';

const creteToken = async (web3, [address], loginWithMetamask) => {
  // Build the header
  const header = {
    alg: 'ETH', //
    typ: 'JWT',
  };

  // Build the claims
  // Using browser's time is dangerous, but used here as a PoC
  const claims = {
    aud: '<centinela>',
    iat: Math.floor(new Date().getTime() / 1000),
    iss: address,
  };

  // Base64 must have padding removed as per RFC7515 appendix C
  let toSign = btoa(JSON.stringify(header)).split('=')[0].replace('+', '-').replace('/', '_');
  toSign += '.';
  toSign += btoa(JSON.stringify(claims)).split('=')[0].replace('+', '-').replace('/', '_');
  const params = [toSign, address];
  const method = 'personal_sign';

  web3.currentProvider.sendAsync({
    method,
    params,
    from: address,
  // eslint-disable-next-line consistent-return
  }, (err, result) => {
    // eslint-disable-next-line no-console
    if (err) return console.error(err);
    // eslint-disable-next-line no-console
    if (result.error) return console.error(result.error);
    const signature = result.result;

    // Leading '0x' is skipped, and each byte is unpacked using two hex chars
    let raw = '';
    for (let i = 2; i < signature.length; i += 2) {
      raw += String.fromCharCode(parseInt(signature.substring(i, i + 2), 16));
    }
    const b64Token = btoa(raw).replace('+', '-').replace('/', '_').split('=')[0];
    const token = `${toSign}.${b64Token}`;
    loginWithMetamask(token);
  });
};

// eslint-disable-next-line no-shadow
const Login = ({ loginWithMetamaskAction }) => {
  const subspace = useSubspace();
  async function handleMetamaskLogin() {
    await subspace.web3.currentProvider.enable();
    creteToken(subspace.web3, await subspace.web3.eth.getAccounts(), loginWithMetamaskAction);
  }

  return (
    <Page
      handleMetamaskLogin={handleMetamaskLogin}
    />
  );
};

const mapDispatchToProps = {
  loginWithMetamaskAction,
};

export default connect(null, mapDispatchToProps)(Login);

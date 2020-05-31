export const loginWithMetamaskType = 'LOGIN-WITH-METAMASK';

const loginWithMetamask = (payload) => ({
  type: loginWithMetamaskType,
  payload,
});

export default loginWithMetamask;

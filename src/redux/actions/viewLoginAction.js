export const viewLoginType = 'VIEW-LOGIN';

const login = ({ }) => ({
  type,
  payload: {
    email,
    password,
  },
});

export default login;
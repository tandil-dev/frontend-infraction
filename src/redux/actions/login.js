export const type = 'LOGIN';

const login = ({ email, password }) => ({
  type,
  payload: {
    email,
    password,
  },
});

export default login;

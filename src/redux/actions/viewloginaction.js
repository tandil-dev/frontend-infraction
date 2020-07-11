export const type = 'viewlogionaction';

const login = ({ }) => ({
  type,
  payload: {
    email,
    password,
  },
});

export default login;
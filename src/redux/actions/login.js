export const type = 'LOGIN';

const login = ({email, password}) => {
  return {
    type,
    payload: {
      email,
      password,
    }
  }
};

export default login;
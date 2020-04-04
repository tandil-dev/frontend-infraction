export const type = 'REGISTER';

const register = ({name,lastname,cuil,phone,email,password}) => {
  return {
    type,
    payload: {
      name,
      lastname,
      cuil,
      phone,
      email,
      password,
    }
  }
};

export default register;
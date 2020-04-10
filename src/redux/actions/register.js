export const type = 'REGISTER';

const register = ({
  name, lastname, cuil, phone, email, password,
}) => ({
  type,
  payload: {
    name,
    lastname,
    cuil,
    phone,
    email,
    password,
  },
});

export default register;

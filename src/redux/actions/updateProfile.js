export const type = 'UPDATE-PROFILE';

const updateProfile = ({
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

export default updateProfile;

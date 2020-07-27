import { type as logoutType } from '../actions/logout';
import { loginWithMetamaskType } from '../actions/loginWithMetamaskAction';
import { type as updateProfileType } from '../actions/updateProfile';
import { viewLoginType } from '../actions/viewLoginAction';

const defaultState = {
  jwt: false,
  djwt: false,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case viewLoginType: {
      return {
        ...state,
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGFuZGlsLmRldiIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.yRKvF6EP78lqkOHNls37eeUBh4k3LPZ39HbNrnPfDfs',
      };
    }
    case logoutType: {
      return {
        ...state,
        jwt: false,
        djwt: false,
        profile: null,
      };
    }
    case updateProfileType: {
      return {
        ...state,
        profile: {
          name: payload.name,
          lastName: payload.lastName,
          cuil: payload.cuil,
          phone: payload.phone,
          address: payload.address,
          email: payload.email,
          password: payload.password,
        },
      };
    }
    case loginWithMetamaskType: {
      return {
        ...state,
        djwt: payload,
      };
    }
    default: return state;
  }
};

export default reducer;

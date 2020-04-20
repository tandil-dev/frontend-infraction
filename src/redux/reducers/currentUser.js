import { type as loginType } from '../actions/login';
import { type as logoutType } from '../actions/logout';
import { loginWithMetamaskType } from '../actions/loginWithMetamaskAction';

const defaultState = {
  jwt: false,
  djwt: false,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case loginType: {
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

import { reportInfractionType } from '../actions/reportInfractionAction';


const defaultState = {
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case reportInfractionType: {
      return {
        ...state,
        data: payload,
      };
    }
    default: return state;
  }
};

export default reducer;

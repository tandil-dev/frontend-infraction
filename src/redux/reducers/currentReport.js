import { reportInfractionType } from '../actions/reportInfractionAction';
import { cleanFilesType } from '../actions/cleanFilesAction';

const defaultState = {
};

const reducer = (state = defaultState, { type, payload }) => {
  console.log(type, state, payload);
  switch (type) {
    case reportInfractionType: {
      return {
        ...state,
        data: payload,
      };
    }
    case cleanFilesType: {
      const data = state.data || {};
      return {
        ...state,
        data: {
          ...data,
          domainFile: undefined,
          situiationFiles: undefined,
        },
      };
    }
    default: return state;
  }
};

export default reducer;

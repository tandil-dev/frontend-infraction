import { createStore, combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import currentReport from './reducers/currentReport';

const reducer = combineReducers({
  currentReport,
  currentUser,
});

const store = createStore(reducer);

export default store;

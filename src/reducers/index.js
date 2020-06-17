import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import clickReducer from './clickReducer';

export default combineReducers({
  graph: graphReducer,
  clicks: clickReducer,
});
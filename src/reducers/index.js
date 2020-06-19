import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import clickReducer from './clickReducer';
import vizualizationProgressReducer from './vizualizationProgressReducer';

export default combineReducers({
  graph: graphReducer,
  clicks: clickReducer,
  vizualizationProgress: vizualizationProgressReducer,
});
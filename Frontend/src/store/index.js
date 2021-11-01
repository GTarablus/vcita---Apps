import { combineReducers } from 'redux';
import { reportReducer } from './reducers/reportReducer';

export const rootReducer = combineReducers({
  reportModule: reportReducer,
});

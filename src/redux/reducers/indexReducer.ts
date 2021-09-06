import {combineReducers, Reducer} from 'redux';
import requestsManagerReducer from './requestsManagerReducer';

export default (state: any, action: any): any=> {
  return combineReducers({
    requestsManager: requestsManagerReducer,
  })(state, action);
};

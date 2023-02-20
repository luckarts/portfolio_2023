/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import globalReducer from 'containers/App/reducer';
import registerPageReducer from 'containers/RegisterPage/reducer';
import loginPageReducer from 'containers/LoginPage/reducer';
import alertMessageReducer from 'containers/AlertMessage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    registerPageReducer: registerPageReducer,
    loginPageReducer: loginPageReducer,
    alertMessageReducer: alertMessageReducer,
    ...injectedReducers
  });
}

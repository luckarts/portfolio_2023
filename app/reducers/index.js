/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import languageReducer from 'containers/LanguageProvider/reducer';
import globalReducer from 'containers/App/reducer';
import registerPageReducer from 'containers/RegisterPage/reducer';
import loginPageReducer from 'containers/LoginPage/reducer';
import alertMessageReducer from 'containers/AlertMessage/reducer';
import tabsReducer from 'containers/Swipeable/reducer';
import projectsReducer from 'containers/Projets/reducer';
import resumeReducer from 'containers/Resume/reducer';
import userProfileReducer from 'containers/UserPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    languageReducer: languageReducer,
    registerPageReducer: registerPageReducer,
    loginPageReducer: loginPageReducer,
    alertMessageReducer: alertMessageReducer,
    tabsReducer,
    projectsReducer,
    userProfileReducer,
    resumeReducer: resumeReducer,
    ...injectedReducers
  });
}

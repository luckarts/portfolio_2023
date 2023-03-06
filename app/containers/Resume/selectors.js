import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectExperiences = (state) => {
  return state.resumeReducer || initialState;
};

const selectUser = (state) => {
  return state.resume || initialState;
};

/**
 * Select the language locale
 */
const makeSelectUSer = () => createSelector(selectUser, (state) => state.user.user);

const makeSelectExperiences = () => createSelector(selectExperiences, (state) => state.experiences.experiences);

export { selectExperiences, makeSelectUSer, selectUser, makeSelectExperiences };

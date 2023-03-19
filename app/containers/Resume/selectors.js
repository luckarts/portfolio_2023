import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectExperiences = ({ resumeReducer }) => {
  return resumeReducer || initialState;
};

/**
 * Select the language locale
 */
const makeSelectExperiences = () => createSelector(selectExperiences, (state) => state);

//const makeSelectExperiences = () => createSelector(selectExperiences, (state) => state.experiences.experiences);
const makeSelectExperience = () => createSelector(selectExperiences, (state) => state.formValues);

export { selectExperiences, makeSelectExperience, makeSelectExperiences };

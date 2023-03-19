import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectProjects = (state) => {
  return state.projectsReducer || initialState;
};

/**
 * Select the language locale
 */

const makeSelectProjects = () => createSelector(selectProjects, (state) => state.projects);
const makeSelectState = () => createSelector(selectProjects, (state) => state.isLoading);
const makeSelectProject = () => createSelector(selectProjects, (state) => state.formValues);

export { selectProjects, makeSelectProjects, makeSelectProject,makeSelectState };

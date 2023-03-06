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

export { selectProjects, makeSelectProjects };

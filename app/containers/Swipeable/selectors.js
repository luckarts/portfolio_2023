import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectTab = (state) => {
  return state.tabsReducer || initialState;
};

/**
 * Select the language locale
 */

const makeSelectTab = () => createSelector(selectTab, (state) => state.tab_id);

export { selectTab, makeSelectTab };

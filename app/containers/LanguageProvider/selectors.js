import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { useSelector } from 'react-redux';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state) => {
  return state.languageReducer.locale;
};
const makeSelectLanguage = () => createSelector(selectLanguage, (languageState) => languageState);

/**
 * Select the language locale
 */

export { selectLanguage, makeSelectLanguage };

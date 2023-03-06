/*
 *
 * LanguageProvider reducer
 *
 */
import produce, { setAutoFreeze } from 'immer';
import { CHANGE_LOCALE, I18N_INIT } from 'containers/LanguageProvider/constants';

export const initialState = {
  locale: navigator.language.split('-')[0] || 'en',
  isLoading: false
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case I18N_INIT:
      draft.isLoading = true;
      break;
    case CHANGE_LOCALE:
      draft.locale = action.locale;
      break;
    default:
  }
}, initialState);

export default languageProviderReducer;
